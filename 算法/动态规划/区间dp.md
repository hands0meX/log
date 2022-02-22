区间dp
f[l][r]为考虑在[l,r]区间范围内进行操作
区间dp一般都是三重for循环
区间dp就是穷举所有范围的解，寻找到最优的解

```java
class Solution {
    public int strangePrinter(String s) {
        int n = s.length();
        int[][] f = new int[n + 1][n + 1];
        for (int len = 1; len <= n; len++) {
            for (int l = 0; l + len - 1 < n; l++) {
                int r = l + len - 1;
                f[l][r] = f[l + 1][r] + 1;
                for (int k = l + 1; k <= r; k++) {
                    if (s.charAt(l) == s.charAt(k)) {
                        f[l][r] = Math.min(f[l][r], f[l][k - 1] + f[k + 1][r]);
                    }
                }
            }
        }
        return f[0][n - 1];
    }
}
```