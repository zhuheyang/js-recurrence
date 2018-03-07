function mergeSort(arr, L, R) {
  let step = 1
  let temp = new Array(R - L + 1)
  // 当合并步长step < arr.length时, 总能足够将整个数组mergeSort一遍
  while(step < R - L + 1) {
    // 通过将arr中未排序部分通过外排法插入到temp中, 再从temp中排序回arr, 从而使得arr最终的序列一致
    // 而merge过程中也毋须重复将temp中已排序好的值重新赋予给arr
    mergePass(arr, temp, step, L, R)
    step *= 2
    mergePass(temp, arr, step, L, R)
    step *= 2
  }
}
function mergePass(arr, temp, step, L, R) {
  // L 是会随着while循环的进行不断变大, 如果剩余的空间不足以进行2 * step步长的序列合并则跳出
  // 使用传入的L可以节省一个变量, 但可能会让人误解, 最好使用额外的一个变量用于标记
  // let i = L   ->  i = i + 2 * step  ->  if(R - i + 1 > step)
  while(2 * step <= R - L + 1) {
    merge(arr, temp, L, L + step - 1, L + 2 * step - 1)
    L = L + 2 * step
  }
  // 跳出while循环后, 此时剩余空间(长度)可能大于一个step, 也可能小于1个step(包括 == 0的情况)
  if(R - L + 1 > step) {
    merge(arr, temp, L, L + step - 1, R)
  } else {
    for(let i = L; i <= R; i++) {
      temp[i] = arr[i]
    }
  }

}
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
function test() {
  const arr = [12, 42, 512, 423, 12, 42, 23]
  mergeSort(arr, 0, (arr.length - 1) >> 1)  // 排序好[0, 3]部分
  console.log(arr);
  mergeSort(arr, 0, arr.length - 1)  // 排序好[0, 6]部分
  console.log(arr);
}
test()