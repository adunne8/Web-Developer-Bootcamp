console.log("Is Even");
console.log(isEven(2));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("Factorial");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log("Kebab to Snake");
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("cats-are-awesome"));
console.log(kebabToSnake("blah"));



function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false
    }

};

function factorial(num) {
    ans = num;
    if (num > 0){
        for(i = num - 1; i > 0; i--){
            ans = ans * i;
        }
    }
    return ans;
};


function kebabToSnake(sentence){
    
    while(sentence.indexOf('-') !== -1){
        sentence = sentence.replace('-', '_');
    }
    return sentence;
    

}
