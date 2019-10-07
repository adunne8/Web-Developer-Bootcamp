var title = document.querySelector("h1");
var titles = document.querySelectorAll("h1");
var body = document.querySelector("body");
var isBlue = false;

for(i = 0; i < titles.length; i++){
    titles[i].style.color = "green";
}

title.style.color = "red";
titles[1].style.color = "blue";

setInterval(function(){
    if (isBlue){
        body.style.backgroundColor = "white";
    }
    else{
        body.style.backgroundColor = "#3498db";
    }
    isBlue = !isBlue;

}, 1000);

