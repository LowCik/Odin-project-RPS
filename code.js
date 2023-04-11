
//initialiser le score 0-0
let scoreP1, scoreP2 = scoreP1 = 0;
let gameOn = true;

function resetScore() {
    gameOn = true;
    scoreP1 = 0;
    scoreP2 = 0;
}
function updateScore() {
    console.log("The score is now :\n P1 : " + scoreP1 + " - " + scoreP2 + " P2");
}
function checkWinner(round) {
    if (scoreP1 >= 3) {
        console.log("PLAYER 1 WON THE BO3 WITH " + scoreP1 + " TO " + scoreP2);
        gameOn = false;
    } else if (scoreP2 >= 3) {
        console.log("PLAYER 2 WON THE BO3 WITH " + scoreP2 + " TO " + scoreP1);
        gameOn = false;
    } /*else if (round >= 5) {
        if (scoreP1 > scoreP2) {
            console.log("PLAYER 1 WON THE BO3 WITH " + scoreP1 + " TO " + scoreP2);
            gameOn = false;
        } else if (scoreP2 > scoreP1) {
            console.log("PLAYER 2 WON THE BO3 WITH " + scoreP2 + " TO " + scoreP1);
            gameOn = false;
        } else {
            console.log("IT'S A FULL DRAW. Try again.");
            gameOn = false;
        }
    }*/
    else {
        return null;
    }
}
// SCORE HANDLER IS ABOVE


/* récupérer le choix de P1.
        Le cacher, puis récupérer le choix de P2.
         */


function getComputerChoice() {
    let computerChoice = Math.random() * 3 + 1;
    if (computerChoice >= 1 && computerChoice < 2) {
        return "rock";
    } else if (computerChoice >= 2 && computerChoice < 3) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerChoice() {
    let move = this.id;
    return move;
}
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
function playARound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log("computerChoice = " + computerChoice + " playerChoice = " + playerChoice);

    playerChoice = playerChoice.toLowerCase(); // put everything to lowercase
    console.log(whoWon(playerChoice, computerChoice));
}

function game() {
    resetScore();
    for (round = 0; scoreP1 < 3 && scoreP2 < 3 && gameOn; round++) {
        playARound();
        checkWinner();
    }
}
/*
        Comparer P1 a P2.*/

function whoWon(P1Choice, P2Choice) {
    if (P1Choice === P2Choice) {
        return "Draw";
    } else if (
        (P1Choice === "rock" && P2Choice === "scissors") ||
        (P1Choice === "scissors" && P2Choice === "paper") ||
        (P1Choice === "paper" && P2Choice === "rock")
    ) {
        scoreP1++;
        updateScore();
        return "Player win : " + P1Choice + " beats " + P2Choice;
    } else {
        scoreP2++;
        updateScore();
        return "Computer win : " + P2Choice + " beats " + P1Choice;
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
// Initialise component of the game
const buttonsP1 = document.querySelectorAll('button');

buttonsP1.forEach((button) => {
    button.addEventListener('click', () => {
        
        console.log(getPlayerChoice());//essaie de renvoyer this via la function
    });
});


// Launch the game
resetScore();
//game();
