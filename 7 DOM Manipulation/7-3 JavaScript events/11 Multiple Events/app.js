// const removeButtons = document.querySelectorAll('li button');
// //select all the buttons inside a list item.

// for(let btn of removeButtons){
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     })
// }
// //loop over each button to add Event Listener for clicks.
// //remove the 'parentElement' (eg - entire list item) of the target
// //(in this case, the target is the button).

// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');


// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(input.value);
//     const newFriend = document.createElement('li');
//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'remove'
//     removeBtn.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     })
//     newFriend.innerText =input.value;
//     newFriend.appendChild(removeBtn);
//     input.value = '';
//     friendList.appendChild(newFriend)
// })


//Using EVENT DELEGATION
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');


//the click EVENT LISTENER is on entire list. 
//IF event happens on a button, 
//THEN we remove that button's parent (the whole list item)
friendList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === 'LI'){
        // e.target.classList.toggle('best-friend');
        const addHeart = document.createElement('span');
        addHeart.innerHTML = "&hearts;";
        e.target.prepend(addHeart);
    }
})


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const newFriend = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove'
    newFriend.innerText =input.value;
    newFriend.appendChild(removeBtn);
    input.value = '';
    friendList.appendChild(newFriend)
})