//carroussel

let slideIndex = 0;
let conteneur = document.querySelector(".conteneur-slides");
let slides = conteneur.querySelectorAll(".slides");

changerSlide(slideIndex);

function changerSlide(n, conteneur) {

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

//fetch les avis
let formulaire = document.querySelector("form")
let divAvis = document.querySelector(".avis");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append("prenom", prenom);
    formData.append("msg", msg);

    fetch("http://localhost/raiponce-coiffure/prod/", {
        method: "POST",
        body: formData
        })
        .then(response => response.json())
        .then(data => {
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