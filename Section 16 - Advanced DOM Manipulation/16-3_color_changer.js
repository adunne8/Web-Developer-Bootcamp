var button = document.getElementById("btnChangeColour");
var bodyElm = document.body;

function changeBGColour(){
    console.log("Clicked");
    console.log(bodyElm.style.backgroundColor)
    bodyElm.style.backgroundColor = bodyElm.style.backgroundColor==="purple" ? "white":"purple";
}

button.addEventListener("click", changeBGColour)