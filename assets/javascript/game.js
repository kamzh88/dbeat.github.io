//naming all the choices the computer have
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//computer is randomly choosing a letter
function cGuess() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
};

var wins = 0;
var losses = 0;
var guessLeft = 10;
var textSoFar = []
var winsText = document.getElementById("wins-text");
var userText = document.getElementById("user-text");
var guessLeftText = document.getElementById("guessleft-text");
var lossesText = document.getElementById("loss-text");
var imageText = document.getElementById("image-text")


function clear() {
    document.getElementById("user-text").innerHTML = "";
    textSoFar = [];
    guessLeft = 10;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    cGuess()
}



document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var text = event.key.toLowerCase();

        if (textSoFar.includes(text)) {

            imageText.textContent = ("You already guess that letter! Guess another letter!");

        } else {

            textSoFar.push(text)
            userText.innerHTML = userText.innerHTML + text + ', ';

            //Incorrect Guesses
            if (text != computerGuess && guessLeft > 0) {
                guessLeft--;
                imageText.textContent = ("Wrong Letter!  Try another!")
                
            }

            //Correct Guesses
            if ((text === computerGuess)) {
                wins++;
                clear();
                guessLeft = 10;
                imageText.textContent= ("You won!  Play again!!!")

            }

            //No more Guess Left
            if (text != computerGuess && guessLeft === 0) {
                imageText.textContent = ("You Lose!  I was thinking of letter " + computerGuess + "!");
                losses++;
                guessLeft--;
                clear();
            }

        }

        guessLeftText.textContent = guessLeft;

    }
};

cGuess();