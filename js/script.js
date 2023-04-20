{
    const welcome = () => {
        console.log("Cześć! Moje powitanie jest już funkcją!");
    }

    const onHideImageClick = () => {
        const image = document.querySelector(".js-aside_image");

        if (image.style.display === "none") {
            image.style.display = "block";
            HideImageButton.innerText = "Schowaj zdjęcie"
        } else {
            image.style.display = "none";
            HideImageButton.innerText = "Pokaż zdjęcie";
        }
    }

    const initImage = () => {
        HideImageButton.addEventListener("click", onHideImageClick);
    }
    const HideImageButton = document.querySelector(".js-aside__button");

    const onChangeBackgrounClick = () => {
        const ParagraphBackground = document.querySelector(".js-section__background");
        ParagraphBackground.classList.toggle("section__background-black");
    }

    const initChangeButton = () => {
        const changeBackgroundButton = document.querySelector(".js-section__button");
        changeBackgroundButton.addEventListener("click", onChangeBackgrounClick);
    }
    welcome();
    initChangeButton()
    initImage()
}
