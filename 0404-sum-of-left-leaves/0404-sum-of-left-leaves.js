/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root,isLeft) {
    let result = 0
    if(!root){
        return 0
    }
    if(root.val && isLeft && !root.left && !root.right){
        result = root.val 
    }
    return result + sumOfLeftLeaves(root.left,true) + sumOfLeftLeaves(root.right,false);   
}