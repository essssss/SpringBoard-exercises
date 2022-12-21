const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
//create a global click counter
let clickCounter = 0;
let firstCard;
let secondCard;
// TODO: Implement this function!
function handleCardClick(event) {


  if (clickCounter === 0) {
    console.log("you just clicked", event.target.className);
    firstCard = event.target.className
    event.target.classList.add("visible");
    clickCounter ++;
  }
  else if (clickCounter === 1){
    // if(YOU CLICK THE SAME CARD TWICE){

    // }
    // else {
      secondCard = event.target.className;
      if (firstCard === secondCard){
        event.target.classList.add("visible");
        console.log("A MATCH!")
        clickCounter = 0;
      }
      else{
      console.log("you just clicked", event.target.className);
      event.target.classList.add("visible");
      setTimeout(resetCards, 1000);}
  }
}

function resetCards(){
  const visArray = document.querySelectorAll(".visible");
  for (i of visArray){
    i.classList.remove("visible")
    clickCounter = 0
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);
