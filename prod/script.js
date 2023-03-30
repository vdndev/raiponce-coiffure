var slideIndex = 0;
var slides = document.querySelectorAll(".slides");

function afficherSlide(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex += n;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add("active");
}

function changerSlide(n) {
    afficherSlide(n);
}

afficherSlide(slideIndex);
