//caroussel

function carousselAuto(slider) {

    let slides = slider.querySelectorAll(".slides");
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

    let slides = slider.querySelectorAll(".slides");
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

let sliders = document.querySelectorAll(".slider");

for (var i = 0; i < sliders.length; i++) {
    carousselAuto(sliders[i]);
    carousselManual(sliders[i]);
}

//fetch les avis/////////////////////////////////////////////
let formulaire = document.querySelector(".formAvis")
let divAvis = document.querySelector(".avis");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(formulaire);

    fetch("http://localhost/raiponce-coiffure/prod/", {
        method: "POST",
        body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let avis = "";
            avis += `
                <p>${prenom}</p>
                <p>${msg}</p>                
                `;

            divAvis.innerHTML = avis;
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});


//tableau fetch

//incremente et decremente avec bouton

//variable counter

//fonction generer les tarifs et soins

//recup donnes sur accueil

//fonction pour generer html 

//quey du formulaire
// evenement submit
//fetch du submit