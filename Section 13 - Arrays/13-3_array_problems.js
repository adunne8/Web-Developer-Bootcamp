// DECLARATION

// ARRAYS
let arr1 = [1,2,3,4,5];
let arr2 = [10,3,-6,10];
let arr3 = [-5, 10, 3, 10, 2, -7];

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
}

// TAKES IN ARRAY AND SUMS NUMBERS, ASSUMES ALL NUMBERS
function sumArray(arr){
    let total = 0; // NEED TO DECLARE AS A NUMBER FOR += OPERATIONS
    let totalTest;

    for(i = 0; i < arr.length; i++){
        console.log(total);
        total += arr[i];
        console.log(totalTest);
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

// OUTPUT RESULTS
console.log(arr1);
console.log(revArr);

console.log(sumArr);

console.log(maxArr);
