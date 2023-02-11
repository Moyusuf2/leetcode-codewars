const strings = ['a', 'b', 'c', 'd']

//4 * 4 = 16 bytes of storage


//push - adds to the end of the array
strings.push('e') // O(1)

//pop - removes from the end of the array
strings.pop()  // O(1)
strings.pop() // O(1)

//unshift - adds to the beginning of the array
strings.unshift('x') //O(n) since it loops through the array and re-assigned the indexes -
//this means that its not the best for adding items at the beginning of the array.


//splice - can adds and removes array elements

strings.splice(2,0,'m') //O(n/2) since it only loops through where the index starts. worse case will be O(n)

console.log(strings)

// There are two types of arrays- static and dynamic


// STATIC ARRAYS
//fixed in size- you will need to specify
// the number of elements your array will hold

//DYNAMIC ARRAY
//size can be changed during the execution of program
//by adding or removing elements( referred to as an "array object")

//Example
/**
 // Static array
let array = [1, 2, 3, 4];

// Dynamic array
let dynamicArray = [];
dynamicArray.push(1);
dynamicArray.push(2);
dynamicArray.push(3);

 */
