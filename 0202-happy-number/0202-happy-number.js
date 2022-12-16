/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n, map = {}) => {
    const sum = [...n.toString()]
        .reduce((acc, e)=>acc+(e*e),0);
    if (sum in map) return false;
    map[sum] = true;
    return sum === 1 || isHappy(sum, map);
};