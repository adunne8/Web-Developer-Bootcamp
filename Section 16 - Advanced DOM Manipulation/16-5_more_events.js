'use strict';
//let firstLi = document.querySelector('li');

let lis = document.querySelectorAll('li');


function hightlight(){
    this.classList.toggle('li-highlight');
}

function done(){
    this.classList.toggle('li-done');
}


//firstLi.addEventListener('mouseover', hightlight);
//firstLi.addEventListener('mouseout', hightlight);

lis.forEach(function(element){
    element.addEventListener('mouseover', hightlight);
    element.addEventListener('mouseout', hightlight);
    element.addEventListener('click', done);
});