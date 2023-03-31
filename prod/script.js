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

///////////////////////////////////////////////////
//fonctions caroussel d'avis et affichage d'avis //
///////////////////////////////////////////////////

let avisSection = document.querySelectorAll(".avis");

function carousselAvis(avisSection) {
  let prev = avisSection.querySelector(".btn-prev");
  let next = avisSection.querySelector(".btn-next");
  let avis = [];
  let index = 0;

  // récupérer les avis depuis l'API
  fetch("../api/avis/read.php")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erreur lors de la récupération des avis");
      }
    })
    .then((data) => {
      // filtrer les 4 derniers avis
      avis = data.slice(-4);
      // inverser l'ordre des avis pour les afficher du plus récent au plus ancien
      avis.reverse();
      // afficher les avis dans le carrousel
      afficherAvis(avisSection, avis, index);

      prev.addEventListener("click", function () {
        index--;
        if (index < 0) {
          index = avis.length - 1;
        }
        afficherAvis(avisSection, avis, index);
      });

      next.addEventListener("click", function () {
        index++;
        if (index === avis.length) {
          index = 0;
        }
        afficherAvis(avisSection, avis, index);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Une erreur est survenue lors de la récupération des avis");
    });
}

///affichage des avis dans le html
function afficherAvis(avisSection, avis, index) {
  let slide = avisSection.querySelector(".apiAvis");
  slide.querySelector("p").innerHTML = avis[index].nom; //voir dans la bdd si c'est bien le nom
  slide.querySelector("h3").innerHTML = avis[index].message; //voir dans la bdd si c'est bien le nom
}

for (let i = 0; i < avisSection.length; i++) {
  carousselAvis(avisSection[i]);
}

//////////////////
//envoi des avis//
//////////////////

let formulaireAvis = document.querySelector(".formAvis");

formulaireAvis.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(formulaireAvis);
  formData.append("submit", "");

  fetch("../api/avis/create.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Votre avis a bien été pris en compte !");
      } else {
        throw new Error("erreur");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("erreur");
    });
});

//////////////////////////
//fetch les reservations//
//////////////////////////

let formulaireResa = document.querySelector(".formReservation");

formulaireResa.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(formulaireResa);
  formData.append("submit", "");

  fetch("../api/contacts/create.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Votre reservation a bien été envoyé !");
      } else {
        throw new Error("erreur");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("erreur");
    });
});

////////////////////
//fetch le contact//
///////////////////

let formulaireContact = document.querySelector(".formContact");

formulaireContact.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(formulaireContact);
  formData.append("submit", "");

  fetch("../api/contacts/create.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Votre message a bien été envoyé !");
      } else {
        throw new Error("erreur");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("erreur");
    });
});

////////////////////
//fetch les soins//
///////////////////

const paraSoins = document.querySelector(".apiSoins");

fetch("../api/soins/read.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erreur de réseau");
    }
  })
  .then((data) => {
    console.log(data);
    let soinsHTML = "";
    data.forEach((soin) => {
      soinsHTML += `
        <div class="listSoins">
            <h3>${soin.nom}</h3> 
            <p id="dots">...............................................................................................................</p>
            <p class="prix">${soin.tarif}</p>
        </div>
            `;
    });
    paraSoins.innerHTML = soinsHTML;
  })
  .catch((error) => {
    console.error(error);
    alert("erreur");
  });

////////////////////
//fetch les coupes//
////////////////////

const paraCoupes = document.querySelector(".apiCoupes");

fetch("../api/coupes/read.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erreur");
    }
  })
  .then((data) => {
    console.log(data);
    let coupesHTML = "";
    data.forEach((coupe) => {
      coupesHTML += `
        <div class="listCoupes">
            <h3>${coupe.nom}</h3>
            <p id="dots">...............................................................................................................</p>
            <p class="prix">${coupe.tarif}</p>
        </div>
            `;
    });
    paraCoupes.innerHTML = coupesHTML;
  })
  .catch((error) => {
    console.error(error);
    alert("Erreur");
  });

////
