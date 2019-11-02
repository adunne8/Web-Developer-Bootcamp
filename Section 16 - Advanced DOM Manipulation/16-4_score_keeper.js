'use strict';

var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
let p1Display = document.getElementById("p1score");
let p2Display = document.getElementById("p2score");

let gameOver = false;
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;


/*
function clickAction(){
    // TAKE IN THE ID, COMBINE WITH "Score", AND THEN INCREMENT IT
    eval(this.id + "Score" + "++");
    

    console.log(p1Score);
    console.log(p2Score);
    
};
*/

function clickAction1(){
    if(!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
    }
    if(p1Score === winningScore){
        gameOver = true;
    }
}

function clickAction2(){
    if(!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
    }
    if(p2Score === winningScore){
        gameOver = true;
    }
}

function clickClear(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false;

    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}



/*
p1Button.addEventListener("click", function(){
    console.log("Clicked: " + this.id);
    this.style.backgroundColor = "red";
});
*/

p1Button.addEventListener("click", clickAction1);
p2Button.addEventListener("click", clickAction2);
//p1Button.addEventListener("click", clickAction);
//p2Button.addEventListener("click", clickAction);
resetButton.addEventListener("click", clickClear);


