/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


function twoSum(nums, target) {
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        // Check if the sum of the two numbers is equal to the target
        if (nums[i] + nums[j] === target) {
            // If it is, return the two numbers
            return [i, j];
        }
      }
    }
}

// O(n^2) Since this solution has nested for loops

