function money(arr, aim) {
  // ��ʼ����̬�滮����
  let dp = new Array(arr.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(aim + 1)
  }

  // ����׼���
  for (let i = 0; i < dp.length; i++) {
    dp[i][aim] = true
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = aim - 1; j >= 0; j--) {
      // ����bug��ʱ��, �������j + arr[i] д����j + arr[j], ���˰��Сʱ! 
      // ������д��һ��, ��Ȼ�߼�û�д���, �ǿ϶����ĸ�ϸ΢�ĵط�д����, ��ͨ����дһ��, д�Ĵ���������
      // �������п��ܵ�, ��������ͬ���ĵط�������, ֻҪ������ճ��
      // dp[i][j] = dp[i + 1][j] || dp[i + 1][j + arr[i]]

      // ���ϵ�һ�д���ɲ������, ����һ������
      dp[i][j] = dp[i + 1][j]
      if((j + arr[i]) <= aim) {
        // �������ǻὫ"||"д����"+", ���½���������false(undefined or null or NaN)
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
