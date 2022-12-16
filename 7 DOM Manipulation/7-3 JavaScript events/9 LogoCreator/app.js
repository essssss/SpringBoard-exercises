const form = document.querySelector("#logoform");
const brandInput = document.querySelector('input[name="brandname"]');
const color = document.querySelector('input[name="brandcolor"]');
const size = document.querySelector('input[name="brandsize"]');
const results = document.querySelector('#results');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const newLogo = makeLogo(
        brandInput.value, 
        color.value, 
        size.value
    );
    results.appendChild(newLogo);
});

function makeLogo(text, color, size){
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + "px";
    return logo;
}