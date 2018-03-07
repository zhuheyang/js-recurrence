// 二维数组中, 不要把arr[i][j]写成了arr[i,j], 会出现很怪异的结果的
// 如果有eslint, 这种错误老早就发现了, 失策! 代码静态检测非常重要
function minPath(arr, i, j){
  let result = 0
  if(i == arr.length - 1 && j == arr[0].length - 1) {
    result = arr[i][j]
  } else if(i == arr.length - 1) {
    const next = getArrNext(arr, i, j + 1)
    result = arr[i][j] + next
  } else if(j == arr[0].length - 1) {
    const next = getArrNext(arr, i + 1, j)
    result = arr[i][j] + next
  } else {
    const downNext = getArrNext(arr, i + 1, j)
    const rightNext = getArrNext(arr, i, j + 1)    
    result = arr[i][j] + Math.min(downNext, rightNext)
  }
  const key = String(i) + '_' + String(j)
  cache.set(key, result)
  return result
}
function getArrNext(arr, i, j) {
  let next = 0
  let nextKey = String(i) + '_' + String(j)
  if(cache.has(nextKey)) {
    next = cache.get(nextKey)
  } else {
    next = minPath(arr, i, j)
  }
  return next
}
function test() {
  const arr = [[1, 8, 9], [3, 5, 7], [4, 3, 1]]
  console.log(minPath(arr, 0, 0));
  cache.forEach((value, key) => console.log(key + ' is ' + value))
}
// cache作为全局变量要保留, 除非将其写进原型链当中, 不然一个全局变量是省不了的
// 也即将其写成一个对象, 通过对象来进行引用
let cache = new Map()
test()
// 12
// 2_2 is 1
// 2_1 is 4
// 2_0 is 8
// 1_2 is 8
// 1_1 is 9
// 1_0 is 11
// 0_2 is 17
// 0_1 is 17
// 0_0 is 12