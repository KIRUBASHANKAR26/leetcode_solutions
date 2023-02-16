/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const result = BigInt(num1) * BigInt(num2)
    console.log(result)
    return result.toString()
};