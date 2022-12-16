/**
 * @param {number} n
 * @return {boolean}
//  */
// const isHappy = (n, map = {}) => {
//     const sum = [...n.toString()]
//         .reduce((acc, e)=>acc+(e*e),0);
//     if (sum in map) return false;
//     map[sum] = true;
//     return sum === 1 || isHappy(sum, map);
// };

var isHappy = function(n) {
    
    let set = new Set();
    let num = n;
    
    while(num !== 1){
        
        // find number digits
        const digits = [...num.toString()];
        
        // find digits squares
        const squares = digits.map(digit => Number(digit) ** 2);
        
        // find the sum of squares
        num = squares.reduce((prev, curr) => prev + curr, 0);
        
        // if this sum is already appears in the set ---> there is a loop,
        // the number is no so happy :)
        if(set.has(num)) return false;
        
        // add the number to the set for the future use
        set.add(num);
    }
    
    // the number is 1 ---> all happy :)
    return true;
};