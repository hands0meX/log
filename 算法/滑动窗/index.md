模版
 1. 先压满所有的值
 2. 在每次滑动的时候添加一个元素的同时删除一个老的元素

 ```javascript
    for(let i = 0; i < arr.length - windowWidth; i ++) {}
    for(let i = windowWidth; i < arr.length; i ++) {}
 ```

 j - i + 1 === 从 索引值i到j 的个数

 经常会和字符串匹配的双指针互动上： LC-438