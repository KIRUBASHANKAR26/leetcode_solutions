/**
 * @param {number[]} nums
 */
class NumArray{
    constructor(_arr){
        this.arr = _arr
    }
    sumRange(left,right){
        const result = this.arr.slice(left,right + 1).reduce((a,b)=> a + b ,0)
        return result
    }
}


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */