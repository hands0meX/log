模版
 1. 先压满所有的值
 2. 在每次滑动的时候添加一个元素的同时删除一个老的元素

 ```javascript
    for(let i = windowWidth; i < arr.length; i ++) {}
 ```

 ```javascript
 //双指针版本 LC-594，611
 for(let i = 0,j = 0; j < n; ++ j) {
    while(i < j && ！滑动窗获取ans条件) i ++
    if(符合条件) 计数条件操作
 }

 ```

 经常会和字符串匹配的双指针互动上： LC-438