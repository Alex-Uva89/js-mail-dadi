/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// ::::::::::::DATI::::::::::::::::
// DEFINIAMO LA NOSTRA LISTA

let myListMail = ['a@a','b@b','c@c','d@d','e@e','f@f'];
console.log(myListMail);
// CHIEDIAMO I DATI ALL'UTENTE E CREIAMO NOSTRA COSTANTE

// Qual è la tua mail?
const mailTakeUser = prompt('Inserisci qui la tua mail');
console.log(mailTakeUser);

// ::::::::::INPUT: GENERAZIONE CONTROLLO MAIL::::::::::

let emailFound = false;

let emailTrue = document.querySelector('.container')
// creiamo ciclo
for (let mailControl = 0; mailControl < myListMail.length; mailControl++) {
// SE ESISTE MEX: BENVENUTO
    if (myListMail[mailControl].toLowerCase() === mailTakeUser.toLowerCase()){
    emailFound = true;
}};

// SE NON ESISTE MEX: MI SPIACE LA TUA MAIL NON è PRESENTE

if (emailFound){
    emailTrue.innerHTML =`<h1 class="output-email correct">Benvenuto</h1>`;
} else {
    emailTrue.innerHTML =`<h1 class="output-email error">la tua mail non esiste </h1>`;
}
// FINE



