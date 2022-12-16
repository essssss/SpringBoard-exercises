const form = document.querySelector('#monkeyform');
form.addEventListener("submit", function(evt){
    evt.preventDefault();
    alert("You submitted the form!!")
});

document.querySelector('a').addEventListener('click',function(e){
    e.preventDefault();
    console.log("Here's Google");
});

document.querySelector('#check').addEventListener('click',function(e){
    e.preventDefault();
    console.log("Check, Mate!");
});