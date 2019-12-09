if(jQuery){
// #1
$("div").css("backgroundColor", "purple");

// #2
$(".highlight").css("width", "200px");

// #3
$("#third").css("border", "1px solid orange");

// #4
$("div:nth-child(1)").css("color", "pink");

}
else{
    console.log("No jQuery");
}