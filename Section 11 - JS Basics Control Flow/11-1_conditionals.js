var age = Number(prompt("Age?"));

if(age < 0){
    console.log("Error");
}
else if(age < 18){
    console.log("Not old enough");
}
else if(age < 21){
    console.log("Cant drink");
}
else if(age === 21){
    console.log("Happy 21st");
}
else{
    console.log("have a drink");
}
if(age%2 == 1){
    console.log("Your age is odd");
}
else if(Math.sqrt(age) % 1 === 0){
    console.log("Square no");
}