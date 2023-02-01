//Given two arrays, create a function that lets a user know (true/false) whether
//these two arrays contain common items
// example 1
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];
// return false
//---------------------------------------

//example 2
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','x'];
// should return true


const array1 = ['a','b','c','x'];
const array2 = ['z','y','x'];
function containsCommonItems(array1,array2){
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if( array1[i] === array2[j]){
                return true
            }
        }
    }
    return false
}

containsCommonItems(array1,array2)