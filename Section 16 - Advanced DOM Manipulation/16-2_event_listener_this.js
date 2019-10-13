var liItems = document.querySelectorAll('li');

function namedFunction(item){
    console.log("Named function, this = ");
    console.log(item);
    // this.style.color = "blue";
};

function nestedNamedFunction(item){
    console.log("Nested Named function, this = ")
    console.log(item);
    this.style.textDecoration = "underline";
};

function nestedNamedFunction(){
    console.log("Nested Named function No Param, this = ")
    console.log(this);
    this.style.color = "purple";
};


for(i = 0; i < liItems.length; i++){
    // liItems[i].addEventListener("click", function(){
    //     console.log("Anonymous Function, this = ");
    //     console.log(this);
    //     this.style.color = "red";
    // // });

    liItems[i].addEventListener("click", namedFunction(this));
    
    liItems[i].addEventListener("click", function(){
        nestedNamedFunction(this);
    });

    liItems[i].addEventListener("click", function(){
        nestedNamedFunctionNoParam(this);
    });
};

