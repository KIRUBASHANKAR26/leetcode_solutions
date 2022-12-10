/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.log(n.toString(2).replaceAll("0","").length)
   return n.toString(2).split("0").join("").length;
};