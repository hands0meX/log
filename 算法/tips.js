var findTarget = function(root, k) {
    const getLeft = (stack) => {
        const root = stack.pop();
        let node = root.right;
        while (node) {
            stack.push(node);
            node = node.left;
        }
        return root;
    }

    const getRight = (stack) => {
        const root = stack.pop();
        let node = root.left;
        while (node) {
            stack.push(node);
            node = node.right;
        }
        return root;
    };

    let left = root, right = root;
    const leftStack = [];
    const rightStack = [];
    leftStack.push(left);
    while (left.left) {
        leftStack.push(left.left);
        left = left.left;
    }
    rightStack.push(right);
    while (right.right) {
        rightStack.push(right.right);
        right = right.right;
    }
    while (left !== right) {
        if (left.val + right.val === k) {
            return true;
        }
        if (left.val + right.val < k) {
            left = getLeft(leftStack);
        } else {
            right = getRight(rightStack);
        }
    }
    return false;
}