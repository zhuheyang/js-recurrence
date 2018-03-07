// 从arr[0][0]开始, 左上角往右下角做递归判断, 分为三种情况:
// i = arr.length - 1 && j = arr[0].length - 1,
// i == arr.length - 1, 此时不用比较, 直接返回arr[i][j]加上arr[i][j + 1]处的运行结果即可
// j == arr[0].length - 1, 同上, 只需往下遍历, 返回arr[i][j]加上arr[i + 1][j]的最小和结果
function minPath1(arr, i, j) {
  // three case, i == arr.length - 1 && j == arr[0].length - 1; i == arr.length - 1; j == arr[0].length -1
  if(i == arr.length - 1 && j == arr[0].length - 1) {
    return arr[i][j]
  }
  if(i == arr.length - 1) {
    return arr[i][j] + minPath1(arr, i, j + 1)
  }
  if(j == arr[0].length - 1) {
    return arr[i][j] + minPath1(arr, i + 1, j)
  }
  return arr[i][j] + Math.min(minPath1(arr, i + 1, j), minPath1(arr, i, j + 1))
}
function test1() {
  const arr = [[1, 8, 9], [3, 5, 7], [4, 3, 1]]
  console.log(minPath1(arr, 0, 0))  // 12
  console.log(minPath1(arr, 2, 2));  // 1
}
// console.log(Math.min(3, 4));  // 3
// test1()

// 从arr[arr.length - 1][arr[0].length - 1] 开始递归, 也即从右下角往左上角递归
// minPath2的基准情况是到达左上角, 而minPath1的基准情况则为达到右下角
function minPath2(arr, i, j) {
  // or you can replace arr[i][j] with a variable arr, like below:
  // let elem = arr[i][j]
  if(i == 0 && j == 0) {
    return arr[i][j]
  }
  if(i == 0) {
    return arr[i][j] + minPath2(arr, i, j - 1)
  }
  if(j == 0) {
    return arr[i][j] + minPath2(arr, i - 1, j)
  }
  return arr[i][j] + Math.min(minPath2(arr, i - 1, j), minPath2(arr, i, j - 1))
}
function test2() {
  const arr = [[1, 8, 9], [3, 5, 7], [4, 3, 1]]
  console.log(minPath2(arr, arr.length - 1, arr[0].length - 1));  // 12
  console.log(minPath2(arr, 0, 0));  // 1
}