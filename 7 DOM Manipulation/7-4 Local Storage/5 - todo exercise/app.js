const submitButton = document.querySelector('#submit');

const itemText = document.querySelector('input[name="listItem"]');

const bigList = document.querySelector('#theList');

const storageList = []

bigList.addEventListener('click', function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completed');
    }
})

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    const newItem = document.createElement('li')
    const removeBtn = document.createElement('button');
    const storageItem = {task: itemText.value,
        completed: false};
    const idNum = 0;
    removeBtn.innerText = 'remove'
    newItem.innerHTML = itemText.value;
    newItem.appendChild(removeBtn);
    itemText.value = '';
    bigList.appendChild(newItem);
    storageList.push(storageItem);
    idNum ++;
})

<li data-id = idNum>itemText.value <button>remove</button></li>




