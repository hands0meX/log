/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    // 用大顶堆维护比中位数小的部分 - smallHalf
    // 用小顶堆维护比中位数大的部分 - largeHalf
    let smallHalf = new Dump(true), 
        largeHalf = new Dump(false);

    // 调整平衡
    function makeBalance() {
        if(smallHalf.length > largeHalf.length + 1) {
            largeHalf.add(smallHalf.poll());
        } else if(smallHalf.length < largeHalf.length) {
            smallHalf.add(largeHalf.poll());
        }
    }

    // 添加一个数字到我们维护的两个堆中
    function insert(num) {
        if(smallHalf.isEmpty() || num <= smallHalf.peek) {
            smallHalf.add(num);
        } else {
            largeHalf.add(num);
        }
        makeBalance();
    }

    // 移除一个数字
    function remove(num) {
        if(num <= smallHalf.peek) {
            smallHalf.remove(num);
        } else {
            largeHalf.remove(num);
        }
        makeBalance();
    }  

    // 计算中位数
    function calMedian() {
        return (k & 1) == 0? (smallHalf.peek + largeHalf.peek) / 2: smallHalf.peek;
    }

    // 先填充满双端队列
    for(let i=0; i < k; ++i) {
        insert(nums[i]);
    }

    // 然后再依次滑动窗口进行计算
    let results = [calMedian()];
    for(let i=k; i < nums.length; ++i) {
        remove(nums[i - k]);
        insert(nums[i]);
        results.push(calMedian());
    }

    return results;
};

作者：user8973
链接：https://leetcode.cn/problems/sliding-window-median/solution/shuang-dui-ding-dui-by-user8973-9ox5/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。