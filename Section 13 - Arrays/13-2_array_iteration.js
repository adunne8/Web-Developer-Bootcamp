var colors = ["red", "blue", "green"];

console.log("forEach JS");
colors.forEach(function(i){
    console.log(i);
})

console.log("forEach ES6");
colors.forEach(i => {
    console.log(i);
});

console.log();
console.log("Loop");

for(i = 0; i < colors.length; i++){
    console.log(colors[i]);
}