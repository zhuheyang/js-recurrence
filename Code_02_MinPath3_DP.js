// �ɱ�����ڶ�̬�滮�Ĺ����оͲ�������д������
// minPathDP1��BaseCase�Ǵ�arr[0][0]��ʼ, minPathDP2��BaseCase���arr[arr.length - 1][arr[0].length - 1]��ʼ
function minPathDP1(matrix) {
  if (matrix == null || matrix.length == 0 || matrix[0] == null || matrix[0].length == 0) {
    return 0
  }
  const row = matrix.length
  const col = matrix[0].length
  let dp = new Array(row)
  for (let i = 0; i < row; i++) {
    dp[i] = new Array(col)
  }
  dp[0][0] = matrix[0][0]  // you have to initialize it with matrix[0][0], or dp[0][0] will be undefined, and the result will be NaN
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + matrix[i][0]
  }
  for (let j = 1; j < col; j++) {
    dp[0][j] = dp[0][j - 1] + matrix[j][0]
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j]
    }
  }
  return dp[row - 1][col - 1]
}

// ��arr[arr.length - 1][arr[0].length - 1]��ΪBaseCase�е�����, �ڽ���ʵ�ʵĴ���д��ʱ,
// ���������Դ� 0 �� row - 1, �� 0 �� col - 1��˳����л�úܶ�
function minPathDP2(arr) {
  if (arr == null || arr.length == 0 || arr[0] == null || arr[0].length == 0) {
    return 0
  }
  const row = arr.length
  const col = arr[0].length
  let dp = new Array(row)
  for (let i = 0; i < row; i++) {
    dp[i] = new Array(col)
  }
  dp[row - 1][col - 1] = arr[row - 1][col - 1]
  // �������һ�е����, ��[row - 2][col - 1]��[0][col - 1]
  for (let i = row - 2; i >= 0; i--) {
    dp[i][col - 1] = dp[i + 1][col - 1] + arr[i][col - 1]
  }
  // �������һ�е����, ��[row - 1][col - 2]��[row - 1][0]
  for (let j = col - 2; j >= 0; j--) {
    dp[row - 1][j] = dp[row - 1][j + 1] + arr[row - 1][j]
  }
  for (let i = row - 2; i >= 0; i--) {
    for (let j = col - 2; j >= 0; j--) {
      dp[i][j] = arr[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1])
    }
  }
  return dp[0][0]
}

function test() {
  const arr = [[1, 8, 9], [3, 5, 7], [4, 3, 1]]
  console.log(minPathDP1(arr));
  console.log(minPathDP2(arr));
}
test()