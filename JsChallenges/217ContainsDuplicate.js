/**
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
 */

let nums = [1,2,3,4];

var containsDuplicate = function(nums) {
    nums.sort();
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === nums[i + 1]){
            return true;
        }
    }
    return false;
};

let result = containsDuplicate(nums);
console.log(result);