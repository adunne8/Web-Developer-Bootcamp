var pTag = document.querySelector("p");
var pTagStrong = document.querySelector("p strong");

console.log(pTag.outerHTML);
console.log(pTagStrong.textContent);


pTag.textContent += "And some more text ";

pTag.innerHTML += "<em>AND ITALIC TEXT</em>";
