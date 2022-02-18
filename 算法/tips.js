const arr = [[1,2],[1,3],[2,3],[1,4],[4,4]]
// 二维数组相同按照逆序，不相同顺序排序
arr.sort((a,b) => {
    if(a[0] - b[0]) return a[0] - b[0]
    else return b[1] - a[1]
})