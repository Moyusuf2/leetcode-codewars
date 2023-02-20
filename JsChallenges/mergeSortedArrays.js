let array1 = [0,3,4,31];
let array2 = [4,6,30];

function mergeArrays(arr1,arr2){
    let newArray = arr1.concat(arr2);
    let sorted = newArray.sort(function(a,b){return a-b});
    return sorted;
}

let result = mergeArrays(array1,array2);
console.log(result);