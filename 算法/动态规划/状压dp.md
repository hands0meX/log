数值比较小 && 0-1状态时使用此方法

![https://uploadfiles.nowcoder.com/images/20200501/731089420_1588305614832_8B3B0DD3B151ADA9BD30FB8F52D155CB]

```java 526
class Solution {
    public int countArrangement(int n) {
        int mask = 1 << n;
        int[][] f = new int[n + 1][mask];
        f[0][0] = 1;
        for (int i = 1; i <= n; i++) {
            // 枚举所有的状态
            for (int state = 0; state < mask; state++) {
                // 枚举位置 i（最后一位）选的数值是 k
                for (int k = 1; k <= n; k++) {
                    // 首先 k 在 state 中必须是 1
                    if (((state >> (k - 1)) & 1) == 0) continue;
                    // 数值 k 和位置 i 之间满足任一整除关系
                    if (k % i != 0 && i % k != 0) continue;
                    // state & (~(1 << (k - 1))) 代表将 state 中数值 k 的位置置零
                    f[i][state] += f[i - 1][state & (~(1 << (k - 1)))];
                }
            }
        }
        return f[n][mask - 1];
    }
}
```

```javascript 847
var shortestPathLength = function(graph) {
    const n = graph.length;
    const queue = [];
    const seen = new Array(n).fill(0).map(() => new Array(1 << n).fill(false));
    for (let i = 0; i < n; ++i) {
        queue.push([i, 1 << i, 0]);
        seen[i][1 << i] = true;
    }

    let ans = 0;
    while (queue.length) {
        const tuple = queue.shift();
        const u = tuple[0], mask = tuple[1], dist = tuple[2];
        if (mask === (1 << n) - 1) {
            ans = dist;
            break;
        }
        // 搜索相邻的节点
        for (const v of graph[u]) {
            // 将 mask 的第 v 位置为 1
            const maskV = mask | (1 << v);
            if (!seen[v][maskV]) {
                queue.push([v, maskV, dist + 1]);
                seen[v][maskV] = true;
            }
        }
    }
    return ans;
};
```