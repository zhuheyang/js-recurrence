function mergeSort1(arr) {
  if(arr == null || arr.length == 0) {
    return null
  }
  // if arr.length == 1, then L == R, return directly, do not need if(arr.lenght == 1)
  sortProcess(arr, 0, arr.length - 1)
}
function sortProcess(arr, L, R) {
  if(L == R) {
    return
  }
  const M = L + ((R - L) >> 1)
  sortProcess(arr, L, M)
  sortProcess(arr, M + 1, R)
  merge(arr, L, M, R)
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
  const arr = [12, 343, 212, 53342, 12, 11, 22]
  mergeSort1(arr) 
  console.log(arr);
}
test()