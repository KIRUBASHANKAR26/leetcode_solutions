/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const removeDuplicate = [...new Set(nums)]
    return nums.length !== removeDuplicate.length
};