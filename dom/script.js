const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/*my code*/

const red = document.createElement('p');
red.classList.add('red');
red.textContent = 'Hey I’m red!';
red.style.cssText =  'color: red;';

content.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = 'I’m a blue h3!';
blue.style.cssText =  'color: blue;';

content.appendChild(blue);


const box = document.createElement('div');
box.classList.add('box');

const boxH = document.createElement('h3');
boxH.classList.add('boxH');
boxH.textContent = 'I’m in a div';
box.appendChild(boxH);

const boxP = document.createElement('p');
boxP.classList.add('boxP');
boxP.textContent = 'ME TOO!';
box.appendChild(boxP);

box.style.cssText =  'background-color: pink; border-color: black';
content.appendChild(box);

/* 1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color 
with the following elements inside of it:
a. another <h1> that says “I’m in a div”
b. a <p> that says “ME TOO!”
c. Hint for this one: after creating the <div> with createElement, 
append the <h1> and <p> to it before adding it to the container. */