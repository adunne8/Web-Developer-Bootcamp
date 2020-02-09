// 

function markOff(item){

    /*
    if($(item).css("color") === "rgb(128, 128, 128)"){
        console.log("It is grey");
        $(item).css({
            color: "black",
            textDecoration: "none"

        });
    }
    else{
        console.log("It is not grey");
        console.log($(item).css("color"));
        $(item).css({
            color: "grey",
            textDecoration: "line-through"

        });
    }
    */
    // REPLACE ABOVE CODE WITH A SIMPLE CLASS CHANGE
    $(item).toggleClass("strikethrough");
};

function deleteItem(item, event){
    console.log($(item).parent().text());
    $(item).parent().fadeOut(700, function(){
        $(this).remove();
    });
    event.stopPropagation();
};

$("li span").on("click", function(e){
    deleteItem(this, e);
    
});

$("li").on("click", function(){
    markOff(this);
});
