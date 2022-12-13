const newTodo = document.createElement('li');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');
boldText.textContent = "DON'T FORGET TO LOCK THE COOP!";
newTodo.classList = 'todo';
newTodo.append(boldText);


const secondTodo = document.createElement('li');
secondTodo.textContent = "Order more la croix";
secondTodo.className = 'todo';

ul.append(newTodo, secondTodo);



const thirdTodo = document.createElement('li');
thirdTodo.textContent = "Coffee";
thirdTodo.className = 'todo';

ul.prepend(thirdTodo);

const newImg = document.createElement('img');
newImg.classList.add('thumbnail')
newImg.setAttribute('src', 'https://img.hobbyfarms.com/shutterstock_151438145.jpg');

document.body.prepend(newImg);


// const removeMe = document.querySelector('#remove-me')
// ul.removeChild(removeMe);

const removeMe = document.querySelector('#remove-me');
removeMe.remove();