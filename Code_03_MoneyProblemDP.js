function money(arr, aim) {
  // 初始化动态规划数组
  let dp = new Array(arr.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(aim + 1)
  }

  // 描绘基准情况
  for (let i = 0; i < dp.length; i++) {
    dp[i][aim] = true
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = aim - 1; j >= 0; j--) {
      // 调试bug的时候, 将后面的j + arr[i] 写成了j + arr[j], 卡了半个小时! 
      // 果断重写了一边, 既然逻辑没有错误, 那肯定是哪个细微的地方写错了, 则通过重写一边, 写的代码会更清晰
      // 错误是有可能的, 但不会在同样的地方错两遍, 只要不复制粘贴
      // dp[i][j] = dp[i + 1][j] || dp[i + 1][j + arr[i]]

      // 以上的一行代码可拆分如下, 减少一次运算
      dp[i][j] = dp[i + 1][j]
      if((j + arr[i]) <= aim) {
        // 这里总是会将"||"写成了"+", 导致结果输出总是false(undefined or null or NaN)
        dp[i][j] = dp[i][j] || dp[i + 1][j + arr[i]]
      }
    }
  }
  return Boolean(dp[0][0])
}
function test() {
  let arr = [2, 3, 5]
  console.log(money(arr, 3))  // true
  console.log(money(arr, 10))  // true
  console.log(money(arr, 20))  // false
}
test()
