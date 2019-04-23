window.setTimeout(function() {
    
    var todos = ["Groceries", "Coding", "Sleep"];

    while(input !== "quit"){
        var input = prompt("What would you like to do?");


        if(input === "list"){
            console.log(todos)
        }
        else if(input === "new"){
            todos.push(prompt("Waht would you like to add?"));
        }

    }

}, 500);
