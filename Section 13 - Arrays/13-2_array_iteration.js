var colors = ["red", "blue", "green"];

console.log("forEach JS");
colors.forEach(function(i){
    console.log(i);
});

console.log("forEach ES6");
colors.forEach(i => {
    console.log(i);
});

console.log("forEach Other Args");
colors.forEach(function(item, i, arr){
    console.log(`Item: ${item}, Index: ${i}, Array: ${arr}`);
});



console.log("Loop");

for(i = 0; i < colors.length; i++){
    console.log(colors[i]);
}