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
    $(item).parent().fadeOut(300, function(){
        $(this).remove();
    });
    // STOPS EVENTS ON OTHER ITEMS 
    event.stopPropagation();
};

function logText(item, event){

    console.log(event.which);
    console.log($(item).val());
    if(event.which === 13){
        $("#todolist").append("<li><span>X</span> " + $(item).val() + "</li>");
        $(item).val("");

    }
}

function setEvents(){
    $("ul").on("click", "li span", function(e){
        deleteItem(this, e);
        
    });

    $("ul").on("click", "li", function(){
        markOff(this);
    });

    $("input[type='text']").on("keypress", function(event){
        logText(this, event);
    });

}

setEvents();