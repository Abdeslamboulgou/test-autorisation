//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
const Message = document.getElementById("messageRefuse");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'age
const ageInput = document.getElementById("age");
//On pointe sur l'élément de la checkbox de contrôle parental
const parentalInput = document.getElementById("parental");
//On défini la variable age qu'on utilisera et un variable définissant l'age de la majorité
let age;
let isControlParentalActive;
let ageMajorite = 18;


//Cette fonction affichera le message de validation
function valider(){
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
  Message.innerHTML ='';
}

//Cette fonction affichera un message d'erreur
function refuser(){
  Message.innerHTML = "Vous n'êtes pas autorisé à entrer";
  espaceMessage.innerHTML='';

}



function onConfirm(){
  
  //On récupère la saisie de l'age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(age)){
    alert("Ceci n'est pas un nombre");
  }
  //On récupère la valeur du checkbox de contrôle parentale. "true" si coché ou "false" si décoché
  isControlParentalActive = parentalInput.checked;

  //=======Code corrigé======
  if(age < ageMajorite && isControlParentalActive){
    refuser();
  }else{
    valider()
  }

  ageInput.value = "";
}

//On écoute l'action de click sur le bouton et on appelle la fonction onConfirm
bouton.addEventListener('click', onConfirm);
