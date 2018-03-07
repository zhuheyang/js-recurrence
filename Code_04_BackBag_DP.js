function backBagDP(weight, value, bag) {
  let dp = new Array(weight.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(bag + 1)
  }

  for (let i = 0; i < bag + 1; i++) {
    dp[dp.length - 1][i] = 0
  }

  for (let i = weight.length - 1; i >= 0; i--) {
    for (let j = bag; j >= 0; j--) {
      // dp[i][j] = dp[i + 1][j] + value[i]  // ����д����, value[i]����������ӵ�!Ҫ��ѭԭ���ĳ��Ա�������ôд��!
      // Math.max(process1(i + 1, j), value[i] + process1(i + 1, j + weight[i]))Ӧ�ø�Ϊ: 
      // Math.max(dp[i + 1][j], value[i] + dp[i + 1][j + weight[i]])
      dp[i][j] = dp[i + 1][j]
      if((j + weight[i]) <= bag) {
        dp[i][j]  = Math.max(dp[i][j], value[i] + dp[i + 1][j + weight[i]])
      }
    }
  }

  return dp[0][0]
}
function test(){
  let weight = [12, 32, 12]
  let value = [2, 4, 5]
  const bag = 25
  console.log(backBagDP(weight, value, bag));
}
test()