// 暴力解法
// 该数组的前提已经是所有的值都不相等了, 则实用意义不大, 但对于启发算法思维十分有帮助
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
function findLocalMinimum_BS (arr) {
    if(arr == null || arr.length == 0) {
      return -1  // no exist
    }
    if(arr.length == 1 || arr[0] < arr[1]) {
      return 0
    }
    if(arr[arr.length - 1] < arr[arr.length - 2]) {
      return arr.length - 1
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
      } else {
        return mid
      }
    }
    // 这里与二分不同, 不会出现left > right的情况, 只会有left == right的情况, 否则局部最小值判断条件就不起作用了
    // 当left == right时, 此时对应的arr[left]处的值即为局部最小值
    // 所以这里retrun right 亦无不妥
    return left
}
function test() {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(findLocalMinimum1(arr1));  // return value : 1
    console.log(findLocalMinimum_BS(arr1));  // return index 0
    const arr2 = [2, 1, 3, 4, 5, 6, 7, 8]  
    console.log(findLocalMinimum1(arr2));  // return value : 1
    console.log(findLocalMinimum_BS(arr2));  // return index 1
    const arr3 = [4, 3, 1, 4, 5, 6, 7, 8]
    console.log(findLocalMinimum1(arr3));  // return value: 1
    console.log(findLocalMinimum_BS(arr3));  // return index 2
    // arr2中, 最后会在index为1, 2, 也即值为(1, 3)之间求mid, 此时的mid即为局部最小值
    // 或者是arr3中的情况, 在index 为1, 2, 也即值为(3, 1)中求mid, 由于arr[mid] > arr[mid + 1] 
    // 则left = mid + 1 (which equals right = 2), 则跳出while循环, 此时返回left 或者 right 均可
}
test()