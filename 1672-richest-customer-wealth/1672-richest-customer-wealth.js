/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   const sumOfArray =  accounts.map(i => i.reduce((a,c) => a+c,0));
    return Math.max(...sumOfArray)
};