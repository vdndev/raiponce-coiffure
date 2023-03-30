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
let formulaireAvis = document.querySelector(".formAvis")
let divAvis = document.querySelector(".avis");

formulaireAvis.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(formulaireAvis);
    formData.append('submit','');

    fetch("http://localhost/raiponce-coiffure/prod/", {
        method: "POST",
        body: formData
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('erreur');
            }
        })
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

//fetch les soins/////////////////////////////////////////////
const paraSoins = document.querySelector('.paraSoins');

fetch('../API/soins.php')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('erreur');
        }
    })
    .then((data)=>{
        console.log(data);
        let soins = "";
        data.soins.forEach(soins => {
            soins += `
            ${soins.nom_soins}...${soins.prix_soins}
            `;
        });
        paraSoins.innerHTML = soins;
    });

//fetch les coupes/////////////////////////////////////////////
const paraCoupes = document.querySelector('.paraCoupes');

fetch('../API/coupes.php')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('erreur');
        }
    })
    .then((data)=>{
        console.log(data);
        let coupes = "";
        data.coupes.forEach(coupes => {
            coupes += `
            ${coupes.nom_coupes}...${coupes.prix_coupes}
            `;
        });
        paracoupes.innerHTML = coupes;
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
                return response.json();
            } else {
                throw new Error('erreur');
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
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
                return response.json();
            } else {
                throw new Error('erreur');
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
});