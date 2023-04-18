console.log("Cześć!");

let aside__button= document.querySelector(".js-aside__button");
let aside_image= document.querySelector(".js-aside_image");

aside__button.addEventListener("click", () => {
    if (aside_image.style.display === "none") {
        aside_image.style.display = "block";
        aside__button.innerText = "Schowaj zdjęcie"
    } else {
        aside_image.style.display = "none";
        aside__button.innerText = "Pokaż zdjęcie"
    }
})

let section__button = document.querySelector(".js-section__button");
let section__background = document.querySelector(".js-section__background");
section__button.addEventListener("click", () => {
    section__background.classList.toggle("section__background-black");
});

