console.log("Hello! How are you?");

let deleteNameButtonElement = document.querySelector(".js-deleteNameButton");
let headingNameElement = document.querySelector(".js-headingName");

deleteNameButtonElement.addEventListener("click", () => {
  headingNameElement.remove();
});

let buttonTwo = document.querySelector(".js-buttonChangeColor");
let headingTwo = document.querySelector(".js-headingAbout");
let colorName = document.querySelector(".colorName");

buttonTwo.addEventListener("click", () => {
  headingTwo.classList.toggle("changeColor");

  colorName.innerText = headingTwo.classList.contains("changeColor")
    ? "czarny"
    : "czerwony";
});

let buttonRemoveTextElement = document.querySelector(".js-buttonRemoveText");
let containerTextElement = document.querySelector(".js-containerText");

buttonRemoveTextElement.addEventListener("click", () => {
  containerTextElement.remove();
});
