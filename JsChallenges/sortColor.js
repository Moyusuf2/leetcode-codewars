var sortColors = function(nums) {
    let swapped;
   do{
       swapped = false;
       for(let i = 0; i < nums.length; i ++){
           if(nums[i] > nums[i+1]){
               let temp = nums[i];
               nums[i] = nums[i+1];
               nums[i+1] = temp;
               swapped = true
           }
       }
   }while(swapped)

   return nums
};

console.log(sortColors([5, 3, 8, 2, 1, 4]));