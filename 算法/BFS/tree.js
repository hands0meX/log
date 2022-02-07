const { tree } = require("../../data/tree");

const BFS = (root) => {
    const queue = []
    queue.push(root)

    while(queue.length) {
        const n = queue.length
        for(let i = 0; i < n; i ++) {
            const node = queue.shift()
            console.log(node.val || node)   //node存string时候直接打印
            if(node.left) queue.push(node.left) 
            if(node.right) queue.push(node.right) 
        }
    }
}

BFS(tree)