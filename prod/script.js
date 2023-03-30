//caroussel
let sliders = document.querySelectorAll(".slider");

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

for (var i = 0; i < sliders.length; i++) {
    carousselAuto(sliders[i]);
    carousselManual(sliders[i]);
}

//fonctions caroussel d'avis et affichage d'avis ////////////////
let avisSection = document.querySelectorAll(".avis");

function carousselAvis(avisSection) {
    let prev = avisSection.querySelector(".btn-prev");
    let next = avisSection.querySelector(".btn-next");
    let avis = [];
    let index = 0;

    // récupérer les avis depuis l'API
    fetch('../API/avis.php')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erreur lors de la récupération des avis');
            }
        })
        .then((data) => {
            // filtrer les 4 derniers avis
            avis = data.slice(-4);
            // inverser l'ordre des avis pour les afficher du plus récent au plus ancien
            avis.reverse();
            // afficher les avis dans le carrousel
            afficherAvis(avisSection, avis);

            prev.addEventListener("click", function () {
                index--;
                if (index < 0) {
                    index = avis.length - 1;
                }
                afficherAvis(avisSection, avis);
            });

            next.addEventListener("click", function () {
                index++;
                if (index === avis.length) {
                    index = 0;
                }
                afficherAvis(avisSection, avis);
            });
        })
        .catch((error) => {
            console.error(error);
            alert("Une erreur est survenue lors de la récupération des avis");
        });
}

function afficherAvis(avisSection, avis) {
    let slides = avisSection.querySelectorAll(".apiAvis");
    for (let i = 0; i < slides.length; i++) {
        let slide = slides[i];
        let j = i - avis.length + 4;
        if (j >= 0 && j < avis.length) {
            slide.querySelector("p").innerHTML = avis[j].nom;
            slide.querySelector("h3").innerHTML = avis[j].msg;
        } 
    }
}

for (let i = 0; i < avisSection.length; i++) {
    carousselAvis(avisSection[i]);
}

//fetch les avis/////////////////////////////////////////////
// let formulaireAvis = document.querySelector(".formAvis");
// let avis = [];

// fetch('../API/avis.php')
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('erreur');
//         }
//     })
//     .then((data)=>{
//         console.log(data);
//         avis = data;
//         afficherAvis();
//     })
//     .catch((error) => {
//         console.error(error);
//         alert("erreur");
//     });
    
///envoi des avis
formulaireAvis.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(formulaireAvis);
    formData.append('submit','');

    fetch("page.php", {
        method: "POST",
        body: formData
        })
        .then((response) => {
            if (response.ok) {
                alert("Votre avis a bien été pris en compte !");
            } else {
                throw new Error('erreur');
            }
        })
        .catch((error) => {
            console.error(error);
            alert("erreur");
        });
});

//fetch les reservations/////////////////////////////////////////////
let formulaireResa = document.querySelector(".formResa");

formulaireResa.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(formulaireResa);
    formData.append('submit','');

    fetch("page.php", {
        method: "POST",
        body: formData
        })
        .then((response) => {
            if (response.ok) {
                alert("Votre reservation a bien été envoyé !");
            } else {
                throw new Error('erreur');
            }
        })
        .catch((error) => {
            console.error(error);
            alert("erreur");
        });
});

//fetch le contact/////////////////////////////////////////////
let formulaireContact = document.querySelector(".formContact");

formulaireContact.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(formulaireContact);
    formData.append('submit','');

    fetch("page.php", {
        method: "POST",
        body: formData
        })
        .then((response) => {
            if (response.ok) {
                alert("Votre message a bien été envoyé !");
            } else {
                throw new Error('erreur');
            }
        })
        .catch((error) => {
            console.error(error);
            alert("erreur");
        });
});

//fetch les soins/////////////////////////////////////////////
const paraSoins = document.querySelector('.listSoins');

fetch('../API/soins.php')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erreur de réseau');
        }
    })
    .then((data) => {
        console.log(data);
        let soinsHTML = "";
        data.soins.forEach(soin => {
            soinsHTML += `
                <h3>${soin.nom_soins}</h3>
                <p id="dots">...............................................................................................................</p>
                <p class="prix">${soin.prix_soins}</p>
            `;
        });
        paraSoins.innerHTML = soinsHTML;
    })
    .catch((error) => {
        console.error(error);
        alert("erreur");
    });


//fetch les coupes/////////////////////////////////////////////
const paraCoupes = document.querySelector('.listCoupes');

fetch('../API/coupes.php')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erreur');
        }
    })
    .then((data) => {
        console.log(data);
        let coupesHTML = "";
        data.coupes.forEach(coupe => {
            coupesHTML += `
                <h3>${coupe.nom_coupes}</h3>
                <p id="dots">...............................................................................................................</p>
                <p class="prix">${coupe.prix_coupes}</p>
            `;
        });
        paraCoupes.innerHTML = coupesHTML;
    })
    .catch((error) => {
        console.error(error);
        alert("Erreur");
    });
    
    ////