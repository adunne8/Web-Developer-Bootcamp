window.setTimeout(function() {
    
    var todos = ["Groceries", "Coding", "Sleep"];

    while(input !== "quit"){
        var input = prompt("What would you like to do?");


        if(input === "list"){
            listDodos();
        }
        else if(input === "new"){
            addTodo();
            listDodos();
        }
        else if(input === "delete"){
            deleteTodo();
            listDodos();

        }

    }

    function listDodos(){
        console.clear();
        console.log("************");
        todos.forEach(function(listItem, i){
            console.log(i + ": " + listItem);
        });
        console.log("************");
    }
    function addTodo(){
        todos.push(prompt("Waht would you like to add?"));
    }
    function deleteTodo(){
        var index = prompt("Which index would you like to delete?");

        if(index >= 0 && index < todos.length){
            todos.splice(index, 1)
            console.log("Todo removed")
        }
        else{
            console.log("Invalid selection");
        }
    }

}, 500);
