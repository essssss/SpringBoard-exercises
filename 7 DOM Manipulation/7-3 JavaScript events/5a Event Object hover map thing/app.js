
const width = window.innerWidth;
const height = window.innerHeight;
let g=127;
let r=0;
let b=0;

document.addEventListener('mousemove', function(e){
    r = Math.round(e.pageX/width * 255);
    b = Math.round(e.pageY/height * 255);
    // window.addEventListener("wheel", function(scroll){ 
    //     addend = Math.sign(scroll.deltaY)
    //     if (g >= 255){
    //         g = 255
    //     } 
    //     else if(g <= 0){
    //         g = 0
    //     } else {
    //         g += addend
    //     }
    // });
    const color = `rgb(${r},0,${b})`
    document.body.style.backgroundColor = color
});

// document.addEventListener('mousemove', function(f){
//     b = Math.round(f.pageY/height * 255);
// });






console.log(r)
console.log(g)
console.log(b)

// Math.min(0, Math.max(255, ))

