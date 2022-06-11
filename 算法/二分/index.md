 有序的序列就自然的考虑到二分

true/false ｜｜ 1？ 问题都可以转换成二分问题


a >> 1 二进制位移一位 相当于除以2； << 1相当于乘以2
二分的本质：
    一段满足某种性质，而另一段不满足某种性质。

二分时候 nums[mid] <= target,最后取的是target的最后一项 && mid = l + r + 1 >> 1
二分 nums[mid] >= target，最后取的是target的第一项 && mid = l + r >> 1

- 二分之后l === r，
- 二分之后没找到相应的值，l + r + 1 >> 1时候的r == l 是target值的左边，反之是右边  (LC-240)

<!-- 右分的模版 -->
```javascript
let n = nums.length
let l = 0,r = n - 1
while(l < r) {
    let mid = l + r >> 1
    if(nums[mid] >= target) {
        r = mid
    } else {
        l = mid + 1
    }
}
```
