
var namedFunction = function(){
    console.log("I am a named (var = ***) function called by an event");
}

function whatButton(){
    console.log("Clicked " + this.id);
}

$("button").click(function(){
    console.log("A button was clicked");
    $(this).css("backgroundColor", "pink");
});

$("button").click(whatButton);

$("button").click(namedFunction);