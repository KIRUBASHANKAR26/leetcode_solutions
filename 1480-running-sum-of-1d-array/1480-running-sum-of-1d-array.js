/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result = []
    for(let i=0;i<nums.length;i++){
        if(result.length >0){
            const lastValue = result.at(-1);
            result.push(lastValue + nums[i])
        }
        else{
            result.push(nums[i])
        }
    }
   return result
};