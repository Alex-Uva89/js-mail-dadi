/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// ::::::::::::DATI:::::::::
// 2 DADI 
let numberUser = document.querySelector('.nut-user');
let numberPc = document.querySelector('.nut-pc');
let drawNumber = document.querySelector('.btn-choise');
let backgrounResult = document.querySelector('body')
// DEVO CREARE DUE SCELTA RANDOM
let numberUserRandom = Math.floor(Math.random()* 12 + 1);
let numberPcRandom = Math.floor(Math.random()* 12 + 1);
//RISULTATO
numberUser.innerHTML = `<div>Hai pescato</div>` + numberUserRandom;
numberPc.innerHTML = `<div>il PC ha pescato</div>` + numberPcRandom;

// ::::::::::::INPUT:::::::::::
if (numberPcRandom > numberUserRandom){
    drawNumber.innerHTML = `<h1 class="lose">Hai perso!!<br>ahaha<br>riprova<h1>`;
    backgrounResult.classList.add('lose-background');
} else if (numberUserRandom > numberPcRandom) {
    drawNumber.innerHTML = `<h1 class="victory">Complimenti!<br>Hai vinto!!</h1>`;
    backgrounResult.classList.add('victory-background');
} else {
    drawNumber.innerHTML = `<h1 class="pair">Pareggio!!<br>riprova</h1>`;
    backgrounResult.classList.add('pair-background');
};

// :::::::::::refresh:::::::::::

document.querySelector('.btn-reload').addEventListener('click', function(){
    location.reload();
})