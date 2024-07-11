/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let res = 0;
    for (let n of nums) {
        if (n !== val) {
            nums[res++] = n
        }
    }
    return res;
};
