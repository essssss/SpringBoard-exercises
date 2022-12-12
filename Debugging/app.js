// let grades = [99, 98, 76, 54, 66, 90, 81];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
// }
// let avg = sum / grades.length;


// try {
//     functionThatDoesNotExist();
// } catch(e) {
//     console.log("Something went wrong!");
//     console.log(e);
// }
// console.log("did we make it?");

// function displayInitials(user){
//     let firstNameLetter
//     let lastNameLetter
//     try{
//     firstNameLetter = user.firstName[0].toUpperCase();
//     lastNameLetter = user.lastName[0].toUpperCase();
//     } catch (e) {
//         return "Invalid Input!";
//     }
//     return `Hello ${firstNameLetter}.${lastNameLetter}`;
    
// }

// displayInitials({firstName: "Jason", lastName: "Momoa" })


// try {
//     undefined.pop(); //This results in an error
// } catch (e) {
//     //But we catch it!!
//     console.log("OH NO ERROR!!!")
//     console.log(e);
// } finally {
//     console.log("INSIDE FINALLY!")
// }
// console.log("did we make it?");


// console.log("I AM BEFORE THE ERROR");

// console.log("I AM AFTER THE ERROR");

// try {
//     throw "I AM THE ERROR!!!"
// } catch (e) {
//     console.log("there was an error", e)
// }


// console.log("an error is coming...");
// try {
//     throw new Error("Oh no");
// } catch (err) {
//     console.log("what kind of error?", err.name);
//     console.log("what is the message?", err.message);
//     console.log("where did it happen?", err.stack);
//     console.dir(err);
// }


function getMonthName(mo) {
    mo--; // Adjust month number for array index (1 = Jan, 12 = Dec)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] ) {
      return months[mo];
    } else {
        throw new Error("Month out of bounds")
    }
  }