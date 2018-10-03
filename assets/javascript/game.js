$(document).ready(function () {
// Varriables
var wins = 0;
$("#wins").text(wins);
var loses = 0;
$("#loses").text(loses);
var guessLeft = 10;
$("#guessLeft").text(guessLeft);
var guessSoFar = "";
$("#guessSoFar").text(guessSoFar);

//initalizing the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

//computer's first pick
var letter = alphabet[Math.floor(Math.random() * alphabet.length)];

$(document).on("keyup", function(event) {
    $("#guessSoFar").text(event.key);

    if ((event.key == letter)) {
        wins++;
        //computer picks another letter
        letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    } 


  });

});

