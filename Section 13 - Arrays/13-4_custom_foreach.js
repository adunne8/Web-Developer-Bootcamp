let nums = [45,65,77,34];
let fruit = ["Apple","Orange","Lemon"];
let sum = 0;

/*
nums.forEach(function(num){
    console.log(num);
});
*/

function myForEach(arr, func){
    // LOOP THROUGH THE ARRAY
    for(var i = 0; i < arr.length; i++){
        // CALL FUNC FOR EACH ITEM IN arr
        func(arr[i]);
    }
};

function loggAndSum(item){
    sum += item;
    console.log('Item: ' + item + ' Sum: ' + sum);
}


myForEach(nums, loggAndSum);


Array.prototype.myNewForEach = function(func){
    for(let i = 0; i < this.length; i++){
        func(this[i]);
    }
};

fruit.myNewForEach(loggAndSum);

fruit.myNewForEach(function(name){
    alert("I eat " + name);
})
