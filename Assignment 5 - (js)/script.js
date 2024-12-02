const redDiv = document.createElement('div');

redDiv.style.backgroundColor = 'red';
redDiv.style.padding = '10px';

redDiv.classList.add('.center');

document.body.appendChild(redDiv);

const image = document.createElement('img');

image.src = './istockphoto-1487894858-612x612.jpg';

image.alt = 'Placeholder Image';

image.classList.add('.center')

redDiv.appendChild(image);

const h1Tag = document.createElement('h1');

h1Tag.textContent = 'Hi everyone!';
