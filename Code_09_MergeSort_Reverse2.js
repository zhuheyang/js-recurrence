// 写这个版本的Merge递归, 想告诉自己, 一件东西, 可以被诠释的很简单, 也可以搞得很复杂
// 而很多东西本身就是很简单的, 不要弄得太复杂了!

// 一开始就预定了一个辅助数组, 而且每次都生成了一个新的, length为arr.length的辅助数组, 实在很浪费
// 空间利用太多, 而且不便理解, 真正使用时, 以Reverse1为准, 这个了解即可
function mergeSort(arr) {
  if(arr == null || arr.length == 0) {
    return
  }
  sortProcess(arr, arr, 0, arr.length - 1)
}
// arr为待排序的数据, assistArr为排序后的数据
function sortProcess(arr, assistArr1, L, R) {
  let assistArr2 = new Array(arr.length)
  if(L == R) {
    assistArr1[L] = arr[L]
  } else {
    let M  = L + ((R - L) >> 1)
    // 这个过程很容易理解的, 抓住递归的本质, 也即最后的基准情况以及一般的情况, 理解这两点即可
    // 两个sortProcess是将[L, M]以及[M + 1, R]的arr的这个范围的给排成有序, 然后并入到assitArr2的对应位置
    // 之后再通过merge过程, 将assistArr2通过外排, 并入给最初传入的assistArr1, 也即arr即可得到排序后的结果
    sortProcess(arr, assistArr2, L, M)
    sortProcess(arr, assistArr2, M + 1, R)
    merge(assistArr2, assistArr1, L, M, R)
  }
}
// 将两个有序数组(arr1, arr2)合并成一个数组arr2
function merge(arr1, arr2, L, M, R) {
  // 没必要为了省一个变量, 然后让代码变得难理解
  let p1 = L  // traverse of arr1's left side can use 'L++' directly, but in this place shoud use one more variable
  let p2 = M + 1  // for the traverse of arr1's right side
  let i = L   // for arr2's traverse
  for(; p1 <= M && p2 <= R; i++) {
    if(arr1[p1] <= arr1[p2]) {
      arr2[i] = arr1[p1++]
    } else {
      arr2[i] = arr1[p2++]
    }
  }
  // which can be writed as:
  // while(p1 <= M) {
  //   arr2[i++] = arr1[p1++]
  // }
  if(p1 <= M) {
    for(let j = 0; j <= M - p1; j++) {
      arr2[i + j] = arr1[p1 + j]
    }
  }
  if(p2 <= R) {
    for(let k = 0; k <= R - p2; k++) {
      arr2[i + k] = arr1[p2 + k]
    }
  }
}
function test() {
  const arr = [12, 4223, 12, 4, 1212, 421]
  mergeSort(arr)
  console.log(arr);
}
test()