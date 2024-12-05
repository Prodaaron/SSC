const inputText = document.querySelector('#taskInput');
const addButton = document.querySelector('#addTaskButton');
const resetButton = document.querySelector('#resetListButton');
const counter = document.querySelector('#counter');


let tasks = [];

// Getting the value of the input field

function getValue() {
    return inputText.value;
}

// Adding a new task

addButton.addEventListener('click', () => {
    const task = getValue();

    // check if the input field is empty

    if (task === '') {
        alert('Please enter a task.');
        return;
    } else {
        tasks.push(task);
        displayTasks();
        inputText.value = '';
    }

    // Displaying the tasks in the list

    function displayTasks() {
        const taskList = document.querySelector('#taskList');
        taskList.innerHTML = '';
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = `${task}`;
            taskList.appendChild(li);
        });
    }
})

// Put completed class when the class li is clicked. 

document.querySelector('#taskList').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');

        // Calculate the number of completed tasks correctly
        const completedTasks = parseInt(counter.textContent.split(': ')[1]) || 0;

        // Adjust the counter correctly based on the toggle state
        if (event.target.classList.contains('completed')) {
            counter.textContent = `Tasks Completed: ${completedTasks + 1}`;
        } else {
            counter.textContent = `Tasks Completed: ${completedTasks - 1}`;
        }

        // Update the local storage with the updated tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});


    // Reset the list

    resetButton.addEventListener('click', () => {
        tasks = [];
        document.querySelector('#taskList').innerHTML = '';
        counter.textContent = 'Tasks Completed: 0';
    });





    