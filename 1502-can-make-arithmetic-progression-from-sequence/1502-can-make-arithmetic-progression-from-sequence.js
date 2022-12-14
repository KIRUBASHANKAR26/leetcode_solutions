/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sorted = arr.sort((a,b) => a - b);
    console.log("sorted",sorted)
    const arrLength = arr.length
    for(let i=0;i<arrLength - 1; i++){
        const diff = sorted[1] - sorted[0]
         console.log(diff + sorted[i] , sorted[i + 1])
        if(!(diff + sorted[i] === sorted[i + 1] && (i + 1 <= arrLength))){
            return false
        }
    }
    return true
};