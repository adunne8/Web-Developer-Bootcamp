// DECLARATION

// ARRAYS
let arr1 = [1,2,3,4,5];
let arr2 = [10,3,-6,10];
let arr3 = [-5, 10, 3, 10, 2, -7];

let arr4 = [1,1,1,1,1];
let arr5 = ["a","a","a","a","a"];
let arr6 = [1,1,5,1];

// RETURN VARIABLES
let revArray = new Array();
let sumArr;



 /*
// EACH ARROW FUNCTION
arr1.forEach(i => {
    console.log(i);
});

arr1.forEach(function(i){
    console.log(i);
});
*/


// TAKES IN ARRAY AND REVERSES THE ORDER
function printReverse(arr){
    const length = arr.length;
    for (i = length-1; i >= 0; i--){
        revArray.push(arr[i]);    
    }
    return revArray
};


// CHECKS IF ALL ELEMENTS ARE IDENTICAL

function isUniform(arr){
    const check = arr[0];
    let isUniform = true;
    arr.forEach(function(element){
        if(element != check){
            isUniform = false;
        }
    });
    return isUniform;
}


// TAKES IN ARRAY AND SUMS NUMBERS, ASSUMES ALL NUMBERS
function sumArray(arr){
    let total = 0; // NEED TO DECLARE AS A NUMBER FOR += OPERATIONS
    let totalTest;

    for(i = 0; i < arr.length; i++){
        total += arr[i];
        totalTest += 10;

    }
    return total;
}


// TAKES IN ARRAY AND FINDS LARGEST NUMBER
function max(arr){
    let maxNum = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;


};


// TEST FUNCTIONS
revArr = printReverse(arr1);
sumArr = sumArray(arr2);
maxArr = max(arr3);
uniArr1 = isUniform(arr4); 
uniArr2 = isUniform(arr5); 
uniArr3 = isUniform(arr6); 

// OUTPUT RESULTS
console.log('Rev Arr');
console.log(revArr);
console.log('Sum Arr');
console.log(sumArr);
console.log('Max Arr');
console.log(maxArr);
console.log('Uni Arrs');
console.log(uniArr1);
console.log(uniArr2);
console.log(uniArr3);