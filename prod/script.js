
/////////////
//caroussel//
/////////////

let sliders = document.querySelectorAll(".slider");

function carousselAuto(slider) {

    let slides = slider.querySelectorAll(".imgSlides");
    let index = 0;

    setInterval(function () {

        slides[index].classList.remove("active");
        index++;
        if (index === slides.length) {
            index = 0;
        }
        slides[index].classList.add("active");
    }, 3000);
}

function carousselManual(slider) {

    let slides = slider.querySelectorAll(".imgSlides");
    let prev = slider.querySelector(".btn-prev");
    let next = slider.querySelector(".btn-next");
    let index = 0;

    prev.addEventListener("click", function () {
        slides[index].classList.remove("active");
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        slides[index].classList.add("active");
    });

    next.addEventListener("click", function () {
    slides[index].classList.remove("active");
    index++;
    if (index === slides.length) {
        index = 0;
    }
    slides[index].classList.add("active");
    });
}

for (var i = 0; i < sliders.length; i++) {
    carousselAuto(sliders[i]);
    carousselManual(sliders[i]);
}