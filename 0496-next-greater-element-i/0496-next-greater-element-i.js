/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    const arr = []
    nums1.forEach(i => {
        const index = nums2.findIndex(a => a === i)
        const max = nums2.slice(index + 1).find(b => b > i)
        if(max > i){
            arr.push(max)
        }else{
            arr.push(-1)
        }
    })
    return arr
};