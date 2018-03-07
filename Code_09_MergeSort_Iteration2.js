function mergeSort2(arr) {
  if(arr == null || arr.length == 0) {
    return null
  }
  sortProcess(arr, 0, arr.length - 1)
}
function sortProcess(arr, L, R) {
  const M = L + ((R - L) >> 1)
  let k = 1  // [i, i + k] Ϊmerge�������ܳ���, Eg: [0, 1] equals merge(arr, L:0, M:0, R:1)
  while(k < M) {
    miniMerge(arr, L, R, k)
    k = k * 2 + 1   // 1, 3, 7, 15, `````
  }
  // ��ʱk �� [M, R), ��miniMerge�ϲ�һ�κ�, ������merge�ϲ�һ��.
  // Eg: arr.length = 8, then M = (7 - 0) >> 1 = 3, when k = 3 >= M, ����while(k<M)ѭ����miniMerge�ϲ�һ��, [0, 3]֮������, [4,7]����, ������������
  // ����еڶ��κϲ�����������. ��arr.length����������ż����û��ϵ, ����󶼻Ὣ����ж���ϲ���
  miniMerge(arr, L, R, k)
  merge(arr, L, k, R)
}
function miniMerge(arr, L, R, size) {
  let begin = L
  const mid = size >> 1
  while(begin + size < R) {
    merge(arr, begin, begin + mid, begin + size)
    begin = begin + size + 1
  }
  // merge the left whose size is less than size
  merge(arr, begin, begin + ((R - begin) >> 1), R)
}
function merge(arr, L, M, R) {
  let help = new Array(R - L + 1)
  let p1 = L
  let p2 = M + 1
  let i = 0
  while(p1 <= M && p2 <= R) {
    if(arr[p1] <= arr[p2]) {
      help[i++] = arr[p1++]
    } else {
      help[i++] = arr[p2++]
    }
  }
  while(p1 <= M) {
    help[i++] = arr[p1++]
  }
  while(p2 <= R) {
    help[i++] = arr[p2++]
  }
  for(let j = 0; j < help.length; j++) {
    arr[L + j] = help[j]
  }
}
function test() {
  const arr = [12, 42, 52, 323, 212, 52333, 11, 2]
  // 0, 1, 2, 3, 4, 5, 6, 7
  mergeSort2(arr)
  console.log(arr)
}
test()