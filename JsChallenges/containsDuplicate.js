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


const array3 = ['a','b','c','x'];
const array4 = ['z','y','x'];
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

containsCommonItems(array3,array4)

//O(n^2) and can be optimized


const NewArray1 = ['a','b','c','x'];
const NewArray2 = ['z','y','v'];

function containsCommonItems(arr1,arr2){
    let map = {};
    for(let i = 0; i < arr1.length; i++) {
      if(!map[arr1[i]]) {
        const item = arr1[i];
        map[item] = true;
      }
    }
    for(let j = 0; j <arr2.length; j++) {
      if(map[arr2[j]]){
        return true;
      }
    }
    return false
  }

  console.log(containsCommonItems(NewArray1,NewArray2))

//since the loops are no longer nested- 
//The time complexity of this code is O(n)