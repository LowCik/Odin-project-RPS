// écrire les truc a un endroit tout de même
const p1Answer = document.querySelector(".answer-p1");
const p2Answer = document.querySelector(".answer-p2");
const winnerIs = document.querySelector(".who-won");
const scoreViewP1 = document.querySelector(".score-P1");
const scoreViewP2 = document.querySelector(".score-P2");
//initialiser le score 0-0
let scoreP1, scoreP2 = scoreP1 = 0;
console.log(scoreP1);
console.log(scoreP2);
function resetScore() {
    scoreP1 = 0;
    scoreP2 = 0;
}
function updateScore(scoreP1, scoreP2) {
    scoreViewP1.textContent = scoreP1;
    scoreViewP2.textContent = scoreP2;
}
function checkWinner() {
    if (scoreP1 >= 3) {
        winnerIs.textContent = "PLAYER 1 WON THE BO3";
    } else if (scoreP2 >= 3) {
        winnerIs.textContent = "PLAYER 2 WON THE BO3";
    } else {
        return null;
    }
}

/* récupérer le choix de P1.
        Le cacher, puis récupérer le choix de P2.
         */

/*  function moveSelector(player, move) {
  while (move != "rock" && move != "paper" && move != "scissors") {
    move = prompt(
      "please only choose between rock, paper or scissors (written like that)"
    );
  }
  return move;
}
 
C'était quand j'utilisais prompt. je dois changer de méthode
 
*/

//let P1Choice = moveSelector("player 1", prompt("Le joueur 1 Choisi"));

//let P2Choice = moveSelector("player 2", prompt("Le joueur 2 Choisi"));

//p1Answer.textContent = P1Choice;
//p2Answer.textContent = P2Choice;
winnerIs.textContent = whoWon(P1Choice, P2Choice);

/*
        Comparer P1 a P2.*/
winnerIs.ontr
function whoWon() {
    let P1Choice = document.getElementById("P1Choice");
    if (P1Choice === P2Choice) {
        return "Draw";
    } else if (
        (P1Choice === "rock" && P2Choice === "scissors") ||
        (P1Choice === "scissors" && P2Choice === "paper") ||
        (P1Choice === "paper" && P2Choice === "rock")
    ) {
        scoreP1++;
        checkWinner;
    } else {
        scoreP2++;
        checkWinner;
    }
}
      /*
Si égalité, pas de changement de score, et redemander aux joueurs.
Si P1 gagne ajouter un point a P1
Sinon ajouter un point a P2 (dans cet ordre. Egalité, P1 win, ou ajout de point a P2
Check si P1 ou P2 a 3 le nombre de point désiré pour la victoire.
Afficher le gagnant.

        Ajouter un bouton de reset (reset les point et reprend a P1 qui choisie)

        */