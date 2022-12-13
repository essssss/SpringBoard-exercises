function greet(){
    console.log("HI I LOVE YOU")
}
function diss(){
    console.log("you suck")
}

// function repeatThreeTimes(eat){
//     eat();
//     eat();
//     eat();
// }
// function repeat(num, func) {
//     for (let i = 0; i<num; i++) {
//         func();
//     }
// }

let funcs = [greet, diss];

const myFunc = function add(x, y){
    return x + y;
}


function giveBirth(){
    console.log('GIVING BIRTH');
    return function cry(){
        return "WAAAAAAHHHH"
    }
}



function makeMultiplyFunc(num){
    return function multi(x) {
        return num * x;
    }
}
//base on the value of num, we can create multiple functions that can act as say, double, triple or quadruple. We can store this as its own variable.
// eg: const quad = makeMultiplyFunc(4);


// greet();
// const id = setInterval(diss, 3000);


