 // CREATE SECRET NUMBER
var secretNumber = 8;

// ASK FOR GUESS
var guess = Number(prompt("Guess a number"));

// CHECK IF CORRECT
if(secretNumber === guess){
    alert("Correct");
}
else if(guess < secretNumber){
    alert("Too low");
}
else if(guess > secretNumber){
    alert("Too high");
}
else{
    alert("Error, input not a number")
}