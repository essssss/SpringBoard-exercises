const form = document.querySelector("#meme-generator");
const imageURL = form.elements["url"];
const topText = form.elements["top"];
const bottomText = form.elements["bottom"];
const results = document.querySelector("#results");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newMeme = makeMeme(imageURL.value, topText.value, bottomText.value);
  results.appendChild(newMeme);
  form.reset();
});

function makeMeme(pic, toptext, bottomtext) {
  const memeDiv = document.createElement("div");
  memeDiv.setAttribute("id", "memeDiv");
  const topTextContent = document.createElement("p");
  topTextContent.innerText = toptext;
  topTextContent.setAttribute("id", "topTextBox");
  const meme = document.createElement("img");
  meme.setAttribute("src", pic);
  meme.setAttribute("id", "memeIMG");
  const bottomTextContent = document.createElement("p");
  bottomTextContent.innerText = bottomtext;
  bottomTextContent.setAttribute("id", "bottomTextBox");
  memeDiv.appendChild(topTextContent);
  memeDiv.appendChild(meme);
  memeDiv.appendChild(bottomTextContent);
  return memeDiv;
}

results.addEventListener("click", function (e) {
  if (e.target.id === "results") {
  } else {
    e.target.parentElement.remove();
  }
});
