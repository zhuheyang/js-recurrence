// ��arr[0][0]��ʼ, ���Ͻ������½����ݹ��ж�, ��Ϊ�������:
// i = arr.length - 1 && j = arr[0].length - 1,
// i == arr.length - 1, ��ʱ���ñȽ�, ֱ�ӷ���arr[i][j]����arr[i][j + 1]�������н������
// j == arr[0].length - 1, ͬ��, ֻ�����±���, ����arr[i][j]����arr[i + 1][j]����С�ͽ��
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

// ��arr[arr.length - 1][arr[0].length - 1] ��ʼ�ݹ�, Ҳ�������½������Ͻǵݹ�
// minPath2�Ļ�׼����ǵ������Ͻ�, ��minPath1�Ļ�׼�����Ϊ�ﵽ���½�
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