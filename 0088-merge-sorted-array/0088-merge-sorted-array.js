/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {    
    nums2.forEach((i, index) => {
        nums1[m + index] = i
    })
    nums1.sort((a,b) => {
        if(a<b){
            return -1;
        }
        return 1;
    })
};