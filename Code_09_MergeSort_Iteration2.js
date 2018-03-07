function mergeSort2(arr) {
  if(arr == null || arr.length == 0) {
    return null
  }
  sortProcess(arr, 0, arr.length - 1)
}
function sortProcess(arr, L, R) {
  const M = L + ((R - L) >> 1)
  let k = 1  // [i, i + k] 为merge操作的总长度, Eg: [0, 1] equals merge(arr, L:0, M:0, R:1)
  while(k < M) {
    miniMerge(arr, L, R, k)
    k = k * 2 + 1   // 1, 3, 7, 15, `````
  }
  // 此时k ∈ [M, R), 则miniMerge合并一次后, 还需再merge合并一次.
  // Eg: arr.length = 8, then M = (7 - 0) >> 1 = 3, when k = 3 >= M, 跳出while(k<M)循环后miniMerge合并一次, [0, 3]之间有序, [4,7]有序, 但整体仍无序
  // 则进行第二次合并后即整体有序. 则arr.length是奇数或者偶数都没关系, 到最后都会将其进行额外合并的
  miniMerge(arr, L, R, k)
  merge(arr, L, k, R)
}
function miniMerge(arr, L, R, size) {
  let begin = L
  const mid = size >> 1
  while(begin + size < R) {
    merge(arr, begin, begin + mid, begin + size)
    begin = begin + size + 1
  }
  // merge the left whose size is less than size
  merge(arr, begin, begin + ((R - begin) >> 1), R)
}
function merge(arr, L, M, R) {
  let help = new Array(R - L + 1)
  let p1 = L
  let p2 = M + 1
  let i = 0
  while(p1 <= M && p2 <= R) {
    if(arr[p1] <= arr[p2]) {
      help[i++] = arr[p1++]
    } else {
      help[i++] = arr[p2++]
    }
  }
  while(p1 <= M) {
    help[i++] = arr[p1++]
  }
  while(p2 <= R) {
    help[i++] = arr[p2++]
  }
  for(let j = 0; j < help.length; j++) {
    arr[L + j] = help[j]
  }
}
function test() {
  const arr = [12, 42, 52, 323, 212, 52333, 11, 2]
  // 0, 1, 2, 3, 4, 5, 6, 7
  mergeSort2(arr)
  console.log(arr)
}
test()