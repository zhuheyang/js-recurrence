// 返回对应值, 也即value, 在数组arr中对应的index
function binarySearchReverse(arr, left, right, value) {
  if (left == right) {
    return arr[left] == value ? left : undefined
  }
  const mid = left + ((right - left) >> 1)
  if (arr[mid] == value) {
    return mid
  } else if (arr[mid] > value) {
    return binarySearchReverse(arr, left, mid - 1, value)
  } else {
    return binarySearchReverse(arr, mid + 1, right, value)
  }
}
// 注意这里针对的数组序列为从左到右为由小到大的, 如果为降序数组, 对应的判断条件应改为:
// if(arr[mid] > value) {left = mid + 1} else if(arr[mid] < value) {right = mid - 1}
function binarySearchIteration(arr, left, right, value) {
  let mid
  while (left < right) {
    mid = left + ((right - left) >> 1)
    if (arr[mid] == value) {
      return mid
    } else if (arr[mid] > value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  // 最后一句代码的正确性证明: 
  // 中值的情况有两种: 
  // 1. 最后的分段有3个index为: 1, 2, 3 中值为2, mid - 1 = 1, mid + 1 = 3. 也即两种结果均为left == right
  // 2. 最后的分段为两个index: (2, 3), if arr[mid] != value, 且arr[mid] > value, 则right = 2 - 1 = 1, 跳出while(left < right)循环
  //    返回arr[left] != value, 也即undefined, 符合结果
  //    if(arr[mid] < value) {left = 2 + 1 = 3} then 结果中, left == right, 也返回正确的结果
  return arr[left] == value ? left : undefined
}
function test() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(binarySearchReverse(arr, 0, arr.length - 1, 2));  // 2
  console.log(binarySearchIteration(arr, 0, arr.length - 1, 2));  // 2
  const arr1 = [2, 6, 8, 12, 65, 211, 444, 121212]
  console.log(binarySearchReverse(arr1, 0, arr1.length - 1, 8));
  // 最后一句代码(arr[left] == value ? left : undefined的正确性证明: 
  // 最后还剩两个index没有比较时, 总是较小的index变为mid, 如果mid != value, 且arr[mid] > value, 亦即说明value应在较小index的左边时
  // 应当返回false或undefined的了, 如果arr[mid] < value, 则value在mid的右边, 此时(left = mid + 1) == right, 跳出while循环return时, 验证
  // arr[left]亦即验证arr[right], 无大碍
  console.log(binarySearchIteration(arr1, 0, arr1.length - 1, 8));
}
test()
// 如果是返回是否存在, 当然返回值为 true 与 false 会好一点, 但鉴于自己写的时候是想返回索引值
// 则此处如果搜索不到时, 返回undefined会更符合使用时的期望