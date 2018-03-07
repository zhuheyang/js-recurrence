function merge(arr, temp, left, mid, right) {
  let p1 = left
  let p2 = mid + 1
  let i = left
  // 按照升序合并arr中的两段有序序列到temp中
  while(p1 <= mid && p2 <= right) {
    if(arr[p1] <= arr[p2]) {
      temp[i++] = arr[p1++]
    } else {
      temp[i++] = arr[p2++]
    }
  }
  while(p1 <= mid) {
    temp[i++] = arr[p1++]
  }
  while(p2 <= right) {
    temp[i++] = arr[p2++]
  }
}
// step为每次merge过程中有序部分的长度: [0, 1, 2, ..., step - 1].length = step
// 总长度: i + 2 * step - 1 = (i + step - 1) + step : merge一共两个step的长度
// 则下一开始merge的位置应为 总长度 + 1: i + 2 * step (很简单, 但也值得推敲)
function mergePass(arr, temp, step, length) {
  let i = 0
  while(length - i >= 2 * step) {
    merge(arr, temp, i, i + step - 1, i + 2 * step - 1)
    i = i + 2 * step
  }
  if(length - i > step) {
    merge(arr, temp, i, i + step - 1, length - 1)
  } else {
    for(let j = i; j < length; j++) {
      temp[j] = arr[j]
    }
  }
}
// 这里的 length, 是mergeSort的右边界, 而mergePass过程, 是默认从左边界, 也即 0 开始进行的
// 通过mergePass两次, 可以确保最终的结果都能顺利回归到arr本身中
function mergeSort(arr, length) {
  let step = 1
  let temp = new Array(length)
  // 先把arr中2个step1长度的有序序列给合并到temp中, 再将temp中两个step2长度的有序序列给合并到arr中
  while(step < length) {
    mergePass(arr, temp, step, length)
    step *= 2
    mergePass(temp, arr, step, length)
    step *= 2
  }
}
function test() {
  const arr = [12, 42, 12, 423, 12, 42, 23]
  mergeSort(arr, arr.length - 1 >> 1)
  console.log(arr);
  mergeSort(arr, arr.length)
  console.log(arr);
}
test()