var int1 = -10;
var int2 = 10;
var int3 = 300;
var int4 = 5;

console.log("Problem 1:")
while(int1 <= 19){
    console.log(int1);
    int1++;
}
console.log("");

console.log("Problem 2:")
while(int2 <= 40){
    if(int2%2 === 0){
        console.log(int2);
    }
    int2++;
}
console.log("");

console.log("Problem 3:");
while(int3 <= 333){
    if(int3 % 2 === 1){
        console.log(int3);
    }
    int3++;
}
console.log("");

console.log("Problem 4");
while(int4 <= 50){
    if(int4 % 5 === 0 && int4 % 3 === 0){
        console.log(int4);
    }
    int4++;
}
