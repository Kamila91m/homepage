{
  const welcome = () => {
    console.log("Hello! How you doin?");
  };

  const onDeleteNameClick = () => {
    const headingNameElement = document.querySelector(".js-headingName");
    headingNameElement.remove();
  };

  const deleteName = () => {
    const deleteNameButtonElement = document.querySelector(
      ".js-deleteNameButton"
    );
    deleteNameButtonElement.addEventListener("click", onDeleteNameClick);
  };

  const onChangeColorClick = () => {
    const headingAboutElement = document.querySelector(".js-headingAbout");
    const colorName = document.querySelector(".colorName");
    headingAboutElement.classList.toggle("changeColor");
    colorName.innerText = headingAboutElement.classList.contains("changeColor")
      ? "czarny"
      : "czerwony";
  };

  const changeColor = () => {
    const changeColorButtonElement = document.querySelector(
      ".js-buttonChangeColor"
    );
    changeColorButtonElement.addEventListener("click", onChangeColorClick);
  };

  const onClickRemoveText = () => {
    const containerTextElement = document.querySelector(".js-containerText");
    containerTextElement.remove();
  };

  const removeText = () => {
    const buttonRemoveTextElement = document.querySelector(
      ".js-buttonRemoveText"
    );
    buttonRemoveTextElement.addEventListener("click", onClickRemoveText);
  };

  welcome();
  deleteName();
  changeColor();
  removeText();
}
