function money2(arr, aim) {
  let dp = new Array(arr.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(aim + 1)
  }

  for (let i = 0; i < dp.length; i++) {
    dp[i][aim] = true
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = aim - 1; j >= 0; j--) {
      // dp[i][j] = dp[i + 1][j] || dp[i + 1][j + arr[i]]
      dp[i][j] = dp[i + 1][j]
      if((j + arr[i]) <= aim) {
        dp[i][j] = dp[i][j] || dp[i + 1][j + arr[i]]
      }
    }
  }

  return Boolean(dp[0][0])
}
function test2(){
  let arr = [2, 3, 5]
  console.log(money2(arr, 3))  // true
  console.log(money2(arr, 10))  // true
  console.log(money2(arr, 20))  // false

  let arr1 = [223, 124, 2, 23, 5, 1, 43, 2]
  console.log(money2(arr1, 347))  // true
  console.log(money2(arr1, 126))  // true
}
test2()