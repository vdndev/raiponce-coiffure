let slideIndex = 0;
let conteneur = document.querySelector(".conteneur-slides");
let slides = conteneur.querySelectorAll(".slides");

changerSlide(slideIndex);

function changerSlide(n) {

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

    afficherSlide(n);
}



//tableau fetch

//incremente et decremente avec bouton

//variable counter

//fonction generer les tarifs et soins

//recup donnes sur accueil

//fonction pour generer html 

//quey du formulaire
// evenement submit
//fetch du submit