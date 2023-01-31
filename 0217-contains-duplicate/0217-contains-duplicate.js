/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const removeDuplicate = [...new Set(nums)]
    console.log(nums.length , removeDuplicate)
    return nums.length !== removeDuplicate.length
};