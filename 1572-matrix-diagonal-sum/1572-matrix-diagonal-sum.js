/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    let sum = 0
    let right = mat.length - 1
    for(let i=0;i<mat.length;i++){
        if((i + i) === (i + right)){
            sum += mat[i][i]
        }else{
         sum += mat[i][i] + mat[i][right]   
        }
        right--;
    }
    return sum
};