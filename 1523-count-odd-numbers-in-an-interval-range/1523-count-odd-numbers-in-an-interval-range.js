/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
////Approach 1
var countOdds = function(low, high) {
    let count = 0;
    for(i=low;i<=high;i++){
        if(i%2===1){
            count += 1;
        }
    }
    return count;
};
////Approach 2
// var countOdds = function(low, high) {
//     if(low%2==0)
//         low++;
//     if(high%2==0)
//         high--;
//     console.log(high,low)
//     return (high-low)/2 +1;
// };
