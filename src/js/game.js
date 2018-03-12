//Intro//

alert("Defuse the bomb and Save Duck World!");


//Génération du nombre//

var randomNumber = Math.floor(Math.random() * 100) +1;

//randomNumber vas donc générer un nombre entre 1 et 100//

//Variable stockage data//
//A utiliser dans l'HTML//

var guesses = document.querySelector('.guesses');
var lastRestult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

//Propositions//

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

//Conséquences//

var guessCount = 1;
var resetButton;

guessField.focus();

//Fonction Guessing Number//

function checkGuess() {
    var userGuess = Number(guessField.value);    //Réponse de l'utilisateur//
    if(guessCount === 1) {                       //GuessCount comptalise le nombre de tentatives et la limite à été fixée à 10//
        guesses.textContent = 'Previous guesses: ';
    }



    guesses.textContent += userGuess + ' ';
    
    if(userGuess === randomNumber) {         //Valeur trouvée, bonne réponse, game over > Win Screen//
        lastResult.textContent = 'Congratulations! You found it and saved Duck World!';
        lastResult.style.backgroundColor = 'Green';
        lowOrHi.textContent = '';
        setGameOver();
    }   else if(guessCount === 10) {       //Limite atteinte, boom game over et go reset la partie//
        lastResult.textContent = 'BOOM - R.I.P Glorious Ducks'
        lowOrHi.textContent = '';
        setGameOver();
    }   else {
        lastResult.textContent = 'Nope!' ;
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {      //Si proposition inférieure au résultat//
            lowOrHi.textContent = 'Too low';
        } else if(userGuess > randomNumber) {   //Si proposition supérieure au résultat//
            lowOrHi.textContent = 'Too High';
        }
    }


//Compteur de tentatives//

    guessCount++;               //++ rajoute donc 1 à la valeur guessCount//
    guessField.value = '';
    guessField.focus();
    }


    guessSubmit.addEventListener('click', checkGuess); //Vas prendre en compte 2 choses, les cliques et le code à éxécuter//


//GameOver Win or Lose//

    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Try Again ?';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
  }

function resetGame() {
    guessCount = 1;

    var resetPAras = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetparas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false;
    guessSubmit.disabled = fasle;
    guessField.value = '';
    guessField.focus();

    lastresult.style.backgroundColor = 'White';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}