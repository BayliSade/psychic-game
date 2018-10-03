// Varriables
var wins = 0;
$("#wins").text(wins);
var computerletter = "";
$("#computerLetter").text(computerletter);
var loses = 0;
$("#loses").text(loses);
var guessLeft = 10;
$("#guessLeft").text(guessLeft);
var guessSoFar = [];

$(document).ready(function () {
    //initalizing the alphabet
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //computer's first pick
    var letter = alphabet[Math.floor(Math.random() * alphabet.length)];

    $(document).on("keyup", function (event) {
        // console.log(alphabet.indexOf(event.key));
        if (alphabet.indexOf(event.key) >= 0) {
            if (guessSoFar.indexOf(event.key) == -1) {
                guessSoFar.push(event.key);
                $("#guessSoFar").text(guessSoFar);

                if ((event.key == letter)) {
                    wins++;
                    //computer picks another letter
                    letter = alphabet[Math.floor(Math.random() * alphabet.length)];
                }
            }
            $("#computerLetter").text(letter);
        }

    });



});
