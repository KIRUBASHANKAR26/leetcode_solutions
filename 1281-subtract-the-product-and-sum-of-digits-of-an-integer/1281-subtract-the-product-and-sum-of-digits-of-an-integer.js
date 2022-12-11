/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const split = n.toString().split("")  
  const sum = split.reduce((a,b) => +a + +b ,0)
  const product = split.reduce((a,b) => +a * +b ,1)
    return product - sum;
};