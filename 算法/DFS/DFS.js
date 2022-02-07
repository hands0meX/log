const { tree } = require("../../data/tree");


//实质就是递归
const DFS = (root) => {
    if(!root) return
    console.log(root.val || root)
    root.left && DFS(root.left)
    root.right && DFS(root.right)
}
DFS(tree)