/**
 * @param {number[]} salary
 * @return {number}
 */
const arrSum = (salary) => {
   return salary.reduce((a,b) => a + b, 0)
}
var average = function(salary) {
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    const length = salary.length - 2;
    const excludedSalary = arrSum(salary) - (max + min)
    return excludedSalary/length;
};