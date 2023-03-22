*Arrays in JavaScript
In JavaScript, arrays are used to store collections of data. They can be created using the [] notation, like so:
const strings = ['a', 'b', 'c', 'd'];

Basic Operations
  Adding and Removing Elements
  push(item) - adds an item to the end of the array. This operation has a time complexity of O(1).
  pop() - removes the last item from the array. This operation also has a time complexity of O(1).
  unshift(item) - adds an item to the beginning of the array. However, this operation has a time complexity of O(n), since it needs to loop through the array and re-assign the indexes.
  splice(startIndex, deleteCount, item1, item2, ...) - can be used to add or remove elements from an array. This operation has a time complexity of O(n/2) in the best case (when only adding elements) and O(n) in the worst case.


Static vs Dynamic Arrays
  There are two types of arrays in JavaScript: static and dynamic.
  Static arrays are fixed in size and require you to specify the number of elements the array will hold.
  Dynamic arrays can be resized during the execution of the program by adding or removing elements.
Pros and Cons
  Pros
    Fast lookups: Arrays provide constant-time access to any element based on its index.
    Fast push/pop: Adding and removing elements from the end of an array is very fast.
  Cons
    Slow inserts and deletes: Adding or removing elements from anywhere other than the end of an array requires re-indexing, which can be slow for large arrays.
    Fixed size: Static arrays have a fixed size, which can be limiting in some cases.


Building an Array Class
Here's an example of how you can build your own dynamic array class in JavaScript:

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// Example usage:
const newArray = new myArray();
newArray.push('Hello');
newArray.push('World');
newArray.push('!');
newArray.delete(1);
console.log(newArray);

In this class, the length property keeps track of the number of elements in the array, and the data property is an object that stores the actual elements. The class provides methods for adding, removing, and getting elements from the array.

Modifying Elements
  splice: adds or removes elements from an array at a specified index and returns the removed elements.
    const arr = [1, 2, 3, 4];
    arr.splice(2, 1, 5); // [3]
    // arr is now [1, 2, 5, 4]
  fill: fills all the elements of an array from a start index to an end index with a static value.
    const arr = [1, 2, 3, 4];
    arr.fill(0, 1, 3); // [1, 0, 0, 4]
  reverse: reverses the order of the elements in an array.
    const arr = [1, 2, 3];
    arr.reverse(); // [3, 2, 1]

Querying and Filtering Elements
  indexOf: returns the index of the first occurrence of a specified element in an array, or -1 if it is not found.
    const arr = [1, 2, 3];
    arr.indexOf(2); // 1

  lastIndexOf: returns the index of the last occurrence of a specified element in an array, or -1 if it is not found.
    const arr = [1, 2, 2, 3];
    arr.lastIndexOf(2); // 2

  includes: returns true if an array includes a specified element, otherwise false.
    const arr = [1, 2, 3];
    arr.includes(2); // true

  filter: creates a new array with all the elements that pass a test implemented by a provided function.
    const arr = [1, 2, 3, 4];
    const filteredArr = arr.filter(num => num % 2 === 0); // [2, 4]

Transforming Arrays
  map: creates a new array with the results of calling a provided function on every element in the array.
    const arr = [1, 2, 3];
    const mappedArr = arr.map