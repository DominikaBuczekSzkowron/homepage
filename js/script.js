{
    const welcome = () => {
        console.log("Cześć! Moje powitanie jest już funkcją!");
    }

    const onHideImageClick = () => {
        const image = document.querySelector(".js-asideImage");

        if (image.style.display === "none") {
            image.style.display = "block";
            hideImageButton.innerText = "Schowaj zdjęcie"
        } else {
            image.style.display = "none";
            hideImageButton.innerText = "Pokaż zdjęcie";
        }
    }

    const initImage = () => {
        hideImageButton.addEventListener("click", onHideImageClick);
    }
    const hideImageButton = document.querySelector(".js-asideButton");

    const onChangeBackgrounClick = () => {
        const paragraphBackground = document.querySelector(".js-sectionBackground");
        paragraphBackground.classList.toggle("section__background--black");
    }

    const initChangeButton = () => {
        const changeBackgroundButton = document.querySelector(".js-sectionButton");
        changeBackgroundButton.addEventListener("click", onChangeBackgrounClick);
    }
    welcome();
    initChangeButton()
    initImage()
}
