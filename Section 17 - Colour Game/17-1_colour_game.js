let numSquares = 6;
let colours = []; //generateRandomColours(numSquares);
let pickedColour;

let squares = document.querySelectorAll('.square');
let colourDisplay = document.getElementById('colourdisplay');
let messageDisplay = document.querySelector("#message");
let header = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
//let easyBtn = document.getElementById("easybtn");
//let hardBtn = document.getElementById("hardbtn");


init();

let modeButtons = document.querySelectorAll(".mode");


colourDisplay.textContent = pickedColour;

function init(){
    for(let i = 0; i < squares.length; i++){
        // SET BACKGROUND COLOUR TO BE ONE OF THE ARRAY ENTRIES FOR EACH SQUARE
        //squares[i].style.backgroundColor = colours[i];
        // ADD CALL TO FUNCTION WHEN CLICKED
        squares[i].addEventListener('click', compareColour);
        reset();
    }
    
}

function pickColour(){
    let randomNumner = Math.floor(Math.random() * colours.length);
    return colours[randomNumner];
}

function compareColour() {
    let clickedColour = this.style.backgroundColor;

    if(clickedColour === pickedColour){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again!"
        changeColours(pickedColour);
        header.style.backgroundColor = pickedColour;

    }
    else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = "Try Again";
    }
}

function changeColours(colour){
    for(let i = 0; i < colours.length; i++){
        squares[i].style.backgroundColor = colour;
    }
}


function generateRandomColours(num){
    // MAKE AN ARRAY
    colourArray = [];

    // RUN FOR REQUESTED num TIMES
    for(let i = 0; i < num; i++){
        // GENERATE A RANDOM COLOUR
        colourArray.push(randomColour());
    }
    return  colourArray;
}



function randomColour(){
    // PICK A RED FROM 0 - 255
    let r = Math.floor(Math.random() * 256);
    // PICK A GREEN FROM 0 - 255
    let g = Math.floor(Math.random() * 256);
    // PICK A BLUE FROM 0 - 255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeDifficulty(){
    // REMOVE selected CLASS FROM ALL BUTTONS THEN ADD TO CLICKED BUTTON
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].classList.remove("selected");
    }
    this.classList.add("selected");

    if(this.textContent === "Easy"){
        numSquares = 3;
    }
    else{
        numSquares = 6;
    }
    reset();

    
}


function reset(){
    // GENERATE NEW COLOURS
    colours = generateRandomColours(numSquares);
    // NEW RANDOM COLOUR TO SEARCH FOR
    pickedColour = pickColour();

    // CHNAGE COLOURS ON SQUARES
    for(let i = 0; i < squares.length; i++){
        // SET BACKGROUND COLOUR TO BE ONE OF THE ARRAY ENTRIES FOR EACH SQUARE
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }

    // CHANGE COLOUR TO CLICK ON
    colourDisplay.textContent = pickedColour;

    // CHANGE BACKGROUND COLOUR OF BANNER
    header.style.backgroundColor = "steelblue";
    
    // CHANGE TEXT BACK TO STARTING TYPE
    resetButton.textContent = "Reset"
    messageDisplay.textContent = "";
}


resetButton.addEventListener("click", reset);
//easyBtn.addEventListener("click", makeEasy);
//hardBtn.addEventListener("click", makeHard);

for(let i =0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", changeDifficulty);
}