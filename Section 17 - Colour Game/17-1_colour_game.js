let colours = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",

];

let squares = document.querySelectorAll('.square');
let colourDisplay = document.getElementById('colourdisplay');
let pickedColour = pickColour();
let messageDisplay = document.querySelector("#message");


colourDisplay.textContent = pickedColour;

function pickColour(){
    let randomNumner = Math.floor(Math.random() * colours.length);
    return colours[randomNumner];
}

function compareColour() {
    let clickedColour = this.style.backgroundColor;

    if(this.style.backgroundColor === pickedColour){
        messageDisplay.textContent = "Correct!";
        changeColours(pickedColour);
    }
    else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = "Try Again";
    }
}

function changeColours(colour){
    console.log(colour);

    for(let i = 0; i < colours.length; i++){
        squares[i].style.backgroundColor = colour;
    }
}


for(let i = 0; i < squares.length; i++){
    // SET BACKGROUND COLOUR TO BE ONE OF THE ARRAY ENTRIES FOR EACH SQUARE
    squares[i].style.backgroundColor = colours[i];
    // ADD CALL TO FUNCTION WHEN CLICKED
    squares[i].addEventListener('click', compareColour);
}


