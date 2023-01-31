/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sort1 = s.split("").sort((a,b)  => a === b ? 0 : a < b ? -1 : 1).join('')
    const sort2 = t.split("").sort((a,b)  => a === b ? 0 : a < b ? -1 : 1).join('')
    return sort1 === sort2
};