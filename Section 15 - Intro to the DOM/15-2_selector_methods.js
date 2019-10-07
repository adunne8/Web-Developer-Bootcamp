let id = document.getElementById("highlight");
let classList = document.getElementsByClassName('bolded');
let tagList = document.getElementsByTagName("li");
let queryItem = document.querySelector('.bolded');
let queryItems = document.querySelectorAll('h1');


for(i = 0; i<classList.length; i++){
    classList[i].style.fontWeight = "bold";
};


console.log(id);
console.log(classList);
console.log(tagList);
console.log(queryItem);
console.log(queryItems);

