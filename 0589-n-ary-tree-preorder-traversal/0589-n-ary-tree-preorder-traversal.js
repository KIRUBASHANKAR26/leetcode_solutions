/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const solArr = [];
    
    const traverseTree = (node) => {
        if (!node) return;
        
        solArr.push(node.val);
        
        node.children.forEach((child) => traverseTree(child));
    }
    
    traverseTree(root);
    
    return solArr;
};