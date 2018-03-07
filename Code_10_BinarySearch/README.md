# 二分查找的新用

二分查找一般用于在有序数组种查找某个值, 时间复杂度为O(logN), 非常迅速. 但并没有限定二分查找法只能应用在有序数组的数值查找中

## 数组局部最小值的查找

`arr.length >= 2`, 则在该数组中, 如果`arr[0] < arr[1]` 或者 `arr[arr.length - 2] < arr[arr.length - 1]`, 则arr[0], 或者arr[arr.length - 1]即为其局部最小值 
在数组中间, 如果`arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]`, 则arr[mid]亦为其局部最小值.  
则题目给出一数组arr, 其所有值均不相等, 要求给出任意一个其中的局部最小值.

### 暴力解法

遍历一遍, 每次都对两边的值进行判断, true即返回, 缺点就是复杂度为O(N)

```js
function findLocalMinimum1(arr) {
    if(arr[0] < arr[1]) {
        return arr[0]
    } else if(arr[arr.length - 1] < arr[arr.length - 2]) {
        return arr[arr.length - 1]
    } else {
        for(let i = 1; i < arr.length - 1; i++) {
            if(arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
                return arr[i]
            }
        }
    }
}
```

### 二分法的解法

一般, 首先都是判断arr[0]位置以及arr[arr.length - 1]位置是否为局部最小值, 如果有, 即return返回.  
如果没有, 则数组两边均呈向下趋势, 则中间就应该有数学中的极小值(也即局部最小值). 这时可取中值进行判断. 如果中值不为局部最小值.  
那么arr(0 ~ mid)以及arr(mid ~ arr.length - 1)这两个范围内必有一个为极小值, 因为范围内均是向下的趋势, 则此时再取一边的中值进行继续的判断即可

```js
function findLocalMinimum_BS(arr) {
    // 首先判断极端情况, arr为null, 或未赋值
    if(arr == null || arr.length = 0) {
        return -1  // no exist
    }
    // 判断arr.length <= 2 的情况
    if(arr.length == 1 || arr[0] < arr[1]) {
        return arr[0]
    }
    // 判断arr.length > 2 的情况
    if(arr[arr.length - 1] < arr[arr.length - 2]) {
        return arr[arr.length - 1]
    }
    let left = 1
    let right = arr.length - 2
    let mid = 0
    while(left < right) {
        mid = left + ((right - left) >> 1)
        if(arr[mid] > arr[mid - 1]) {
            right = mid - 1
        } else if(arr[mid] > arr[mid + 1]) {
            left = mid + 1
        } else {  // which means arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]
            return mid
        }
    }
    return left
}
```

## JS版本的二分法实现

```js
Array.prototype.binarySearch = function(low, high, khey) {
    if(low > high) {
        return -1
    }
    const mid = parseInt(low + (high - low) / 2)
    if(this[mid] > khey) {
        return this.binarySearch(low, mid - 1, khey)
    }
    if(this[mid] < khey) {
        return this.binarySearch(mid + 1, high, khey)
    }
    return mid
}
```
