/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) {
        return nums.length;
    }
    let k = 2;
    for(let i = 2; i < nums.length; i++){
        if(nums[i] === nums[i - 2] && nums[i] === nums[i - 1]){
            nums.splice(i,1)
            i--;
        }
    }
    return nums.length;
};