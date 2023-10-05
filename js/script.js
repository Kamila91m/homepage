{
  const welcome = () => {
    console.log("Hello! How you doin?");
  };

  const onDeleteNameClick = () => {
    const headingNameElement = document.querySelector(".js-headingName");
    headingNameElement.remove();
  };

  const onChangeColorClick = () => {
    const headingAboutElement = document.querySelector(".js-headingAbout");
    const colorName = document.querySelector(".colorName");

    headingAboutElement.classList.toggle("changeColor");
    colorName.innerText = headingAboutElement.classList.contains("changeColor")
      ? "czarny"
      : "czerwony";
  };

  const onClickRemoveText = () => {
    const containerTextElement = document.querySelector(".js-containerText");
    containerTextElement.remove();
  };

  const init = () => {
    const changeColorButtonElement = document.querySelector(
      ".js-buttonChangeColor"
    );
    const buttonRemoveTextElement = document.querySelector(
      ".js-buttonRemoveText"
    );
    const deleteNameButtonElement = document.querySelector(
      ".js-deleteNameButton"
    );
    changeColorButtonElement.addEventListener("click", onChangeColorClick);
    buttonRemoveTextElement.addEventListener("click", onClickRemoveText);
    deleteNameButtonElement.addEventListener("click", onDeleteNameClick);

    welcome();
  };

  init();
}
