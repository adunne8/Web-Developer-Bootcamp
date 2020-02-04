function fadeElements(){
    $(".fadediv").fadeToggle(500, function(){
        console.log("Fade actually completed");
        //$(this).remove();
    });
    console.log("Fade Complete");
}

function slideElements(){
    $(".slidediv").slideToggle(500, function(){
        console.log("Slide actually completed");
        //$(this).remove();
    });
    console.log("Slide Complete");
}



$("#fadebutton").on("click", function(){
    fadeElements();
});

$("#slidebutton").on("click", function(){
    slideElements();
});