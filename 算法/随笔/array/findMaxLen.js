const a = [1,2,3,3,34,32,45,4,4,4,4,5,465]

const getMax = (arr) => {
    const map = new Map()
    for(let i = 0;i < arr.length; i ++) {
        if(map.has(arr[i])) map.get(arr[i]).push(i)
        else map.set(arr[i], [i])
    }
    let maxItem,maxLen = 0;
    for(let arr of map) {
        if(maxLen <  arr[1].length) {
            maxItem = arr
            maxLen = arr[1].length
        }
    }
    return maxItem
}

const res = getMax(a)