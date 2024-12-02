const redDiv = document.createElement('div');

redDiv.style.backgroundColor = 'red';
redDiv.style.padding = '10px';

redDiv.classList.add('center');

document.body.appendChild(redDiv);

const image = document.createElement('img');

image.src = './istockphoto-1487894858-612x612.jpg';

image.alt = 'Placeholder Image';

image.classList.add('.center')

redDiv.appendChild(image);

const h1Tag = document.createElement('h1');

h1Tag.textContent = 'Hi everyone!';
document.body.append(h1Tag);


const pa = document.createElement('p')

document.body.append(pa);

const span = document.createElement('span');
pa.appendChild(span);
const strong = document.createElement('strong');

strong.textContent = 'this is a strong text!';

span.appendChild(strong);

redDiv.id = 'div-id';

const span2 = document.createElement('span');
span2.id = 'span2';
span2.textContent = 'span tag';
redDiv.appendChild(span2);
const span3 = document.createElement('span');
span3.id = 'span3';
redDiv.appendChild(span3);
span3.textContent = 'span tag';
const span4 = document.createElement('span');

span4.textContent = 'span tag';
span4.id = 'span2';
redDiv.appendChild(span4);

document.getElementById('span3').remove();

span2.style.color = 'darkred';
span4.style.color = 'darkred';