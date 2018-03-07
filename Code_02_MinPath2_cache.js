// ��ά������, ��Ҫ��arr[i][j]д����arr[i,j], ����ֺܹ���Ľ����
// �����eslint, ���ִ�������ͷ�����, ʧ��! ���뾲̬���ǳ���Ҫ
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
// cache��Ϊȫ�ֱ���Ҫ����, ���ǽ���д��ԭ��������, ��Ȼһ��ȫ�ֱ�����ʡ���˵�
// Ҳ������д��һ������, ͨ����������������
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