var paragraph = document.querySelector('p');
var heading = document.querySelector('h1');
var ulItem = document.getElementsByTagName('ul')[0];
var liItems = document.querySelectorAll('li');

function logIt(){
    console.log("clicked");
};

function liClickFunction(){
    console.log("clicked li: ");
    console.dir(this);
};

function liOtherClickFunction(item){
    console.log(item)
}


paragraph.addEventListener('click', logIt);
heading.addEventListener('click', function(){
    console.log("Other CLick Function:");
    console.log(this);

    heading.textContent = "You clicked me!!!";
});


// ulItem.addEventListener("click", function(){
//     console.log("You are clicking");
// });

// ulItem.addEventListener("mouseover", function(){
//     console.log("You are hovering");
// });

for (var i = 0; i < liItems.length; i++){
    liItems[i].addEventListener("click", function(){
        this.style.color = "red";
    })

    // liItems[i].addEventListener("click", liClickFunction);

    liItems[i].addEventListener("click", function(){
        liOtherClickFunction(this);
    });
};

