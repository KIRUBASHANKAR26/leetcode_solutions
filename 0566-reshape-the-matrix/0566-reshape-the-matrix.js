/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const flat = mat.flat()
    if(!(r * c === flat.length)){
        return mat
    }
    
    let result = Array(r).fill([]).map(() => {
        return Array(c).fill().map(()=>flat.shift())
    });
    return result;
};