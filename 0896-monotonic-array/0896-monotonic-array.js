/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function(A) {
    let increase = true, decrease = true;
    for(let i = 0; i < A.length - 1; i++) {
        if(A[i] > A[i + 1]) increase = false;
        if(A[i] < A[i + 1]) decrease = false;
    }
    return increase || decrease;
};