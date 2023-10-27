{
  const welcome = () => {
    console.log("Cześć! Moje powitanie jest już funkcją!");
  };

  const onHideImageClick = () => {
    const image = document.querySelector(".js-asideImage");

    if (image.style.display === "none") {
      image.style.display = "block";
      hideImageButton.innerText = "Schowaj zdjęcie";
    } else {
      image.style.display = "none";
      hideImageButton.innerText = "Pokaż zdjęcie";
    }
  };

  const initImage = () => {
    hideImageButton.addEventListener("click", onHideImageClick);
  };
  const hideImageButton = document.querySelector(".js-asideButton");

  const onChangeBackgrounClick = () => {
    const paragraphBackground = document.querySelector(".js-sectionBackground");
    paragraphBackground.classList.toggle("section__background--black");
  };

  const initChangeButton = () => {
    const changeBackgroundButton = document.querySelector(".js-sectionButton");
    changeBackgroundButton.addEventListener("click", onChangeBackgrounClick);
  };

  const onChangeLanguageClick = () => {
    const changedButtonText = document.querySelector(
      ".js-button_languageChanger"
    );
    const aboutMe = document.getElementById("nav_aboutMe");
    const experience = document.getElementById("nav_experience");

    if (changedButtonText.innerText === "język angielski") {
      changedButtonText.innerText = "język polski";
      aboutMe.innerText = "About me";
      experience.innerText = "Experience";
    } else {
      changedButtonText.innerText = "język angielski";
      aboutMe.innerText = "O mnie";
      experience.innerText = "Doświadczenie zawodowe";
    }
  };
  const initChangeLanguageButton = () => {
    const changeLanguageButton = document.querySelector(
      ".js-button_languageChanger"
    );
    changeLanguageButton.addEventListener("click", onChangeLanguageClick);
  };

  welcome();
  initChangeButton();
  initImage();
  onChangeLanguageClick();
  initChangeLanguageButton();
}
