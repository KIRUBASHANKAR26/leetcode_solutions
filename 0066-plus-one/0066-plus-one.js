/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let isPlus = true
//     for(let i=digits.length - 1;i>=0;i--){
//         if(isPlus){
//            if(digits[i]===9){
//             digits[i] = 0
//             }else{
//                 digits[i] = digits[i] + 1;
//                 isPlus = false
//             } 
//         }
//         if(isPlus && i === 0){
//             digits.unshift(1)
//         }
//     }
//     return digits
// };

var plusOne = function(digits) {
    const fromArray = digits.join(''); // get Digits out of Array
    const toInt = BigInt(fromArray) ; //Dont use parseInt, use BigInt instead :) 
    const addOne = toInt + 1n; // add one! 
    return addOne.toString().split('')
};