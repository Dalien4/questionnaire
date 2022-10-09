// on déclare les variables
const main = document.querySelector(".main");
const boutons = document.querySelectorAll(".fa-regular");
const contenus = document.querySelectorAll(".article__contenu");

main.addEventListener("click", function (event) {
  const dataId = event.target.dataset.id;
  const element = document.getElementById(dataId);

  if (dataId) {
    // on vérifie si le bouton est en plus
    const plus = event.target.classList.contains("fa-plus-square");

    // on désactive tous les contenus potentiellement actifs
    contenus.forEach(function(contenu){
        contenu.classList.remove("article__contenu--actif");
    });

    // on converti en plus tous les boutons actuellement en moins
    boutons.forEach(function(bouton){
        bouton.classList.remove("fa-minus-square");
        bouton.classList.add("fa-plus-square");
    });

    // on inverse l'état d'origine du bouton
    if(plus){
        event.target.classList.remove("fa-plus-square");
        event.target.classList.add("fa-minus-square");
        element.classList.add("article__contenu--actif");
    } else {
        event.target.classList.remove("fa-minus-square");
        event.target.classList.add("fa-plus-square");
    }
  }
});
