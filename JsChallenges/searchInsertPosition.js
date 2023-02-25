var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return nums.indexOf(target);
        }
        else{
            nums.push(target);
            let sorted = nums.sort(function(a,b){return a-b});
            return sorted.indexOf(target);
        }
    }
};