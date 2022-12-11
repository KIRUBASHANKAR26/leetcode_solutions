/**
 * @param {number[]} nums
 * @return {number}
 */
// var largestPerimeter = function(nums) {
//     const sort = nums.sort((a,b) => a - b);
//     console.log(sort);
//     for(let i = 0; i< sort.length - 2 ; i++){
//             if (nums[i] < nums[i + 1] + nums[i + 2]) 
//                 return nums[i] + nums[i + 1] + nums[i + 2];
//     return 0
//     }
// };

var largestPerimeter = function(A) {
  A.sort((a, b) => b - a);
  const N = A.length - 2;
  for (let i = 0; i < N; i++) {
    if (A[i] < A[i + 1] + A[i + 2]) return A[i] + A[i + 1] + A[i + 2];
  }
  return 0;
};