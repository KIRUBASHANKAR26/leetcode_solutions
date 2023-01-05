/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    let sum = 0
    let left = 0
    let right = mat.length - 1
    for(let i=0;i<mat.length;i++){
        console.log("letf",i,left,"right",i,right)
        if((i + left) === (i + right)){
            sum += mat[i][left]
        }else{
         sum += mat[i][left] + mat[i][right]   
        }
        left++;
        right--;
    }
    return sum
};