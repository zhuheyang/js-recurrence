function mergeSort2(arr) {
  if(arr == null || arr.length == 0) {
    return null
  }
  sortProcess(arr, 0, arr.length - 1)
}
function sortProcess(arr, L, R) {
  const M = L + ((R - L) >> 1)
  let k = 1
  while(k < M) {
    let i = 0
    const m = k >> 1
    // 这里如果改成i + k <= R, 最终的结果会增加一个undefined在数组的最后面
    while(i + k < R) {
      merge(arr, i, i + m, i + k)
      i = i + k + 1
    }
    merge(arr, i, i + ((R - i) >> 1), R)
    k = k * 2 + 1
  }
  merge(arr, 0, k >> 1, k)
  merge(arr, k + 1, k + 1 + ((R - (k + 1)) >> 1), R)
  merge(arr, 0, k, R)
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