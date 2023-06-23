/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
      let currentValue = nums[i]; // the numberToInsert number we're looking to insert
      let j; // the inner counter
  
      // loop from the right to the left
      for (j = i - 1; nums[j] > currentValue && j >= 0; j--) {
        // move numbers to the right until we find where to insert
        nums[j + 1] = nums[j];
      }
  
      // do the insertion
      nums[j + 1] = currentValue
    }
    return nums;
  }