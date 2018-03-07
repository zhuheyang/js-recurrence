// д����汾��Merge�ݹ�, ������Լ�, һ������, ���Ա�ڹ�͵ĺܼ�, Ҳ���Ը�úܸ���
// ���ܶණ��������Ǻܼ򵥵�, ��ҪŪ��̫������!

// һ��ʼ��Ԥ����һ����������, ����ÿ�ζ�������һ���µ�, lengthΪarr.length�ĸ�������, ʵ�ں��˷�
// �ռ�����̫��, ���Ҳ������, ����ʹ��ʱ, ��Reverse1Ϊ׼, ����˽⼴��
function mergeSort(arr) {
  if(arr == null || arr.length == 0) {
    return
  }
  sortProcess(arr, arr, 0, arr.length - 1)
}
// arrΪ�����������, assistArrΪ����������
function sortProcess(arr, assistArr1, L, R) {
  let assistArr2 = new Array(arr.length)
  if(L == R) {
    assistArr1[L] = arr[L]
  } else {
    let M  = L + ((R - L) >> 1)
    // ������̺���������, ץס�ݹ�ı���, Ҳ�����Ļ�׼����Լ�һ������, ��������㼴��
    // ����sortProcess�ǽ�[L, M]�Լ�[M + 1, R]��arr�������Χ�ĸ��ų�����, Ȼ���뵽assitArr2�Ķ�Ӧλ��
    // ֮����ͨ��merge����, ��assistArr2ͨ������, �������������assistArr1, Ҳ��arr���ɵõ������Ľ��
    sortProcess(arr, assistArr2, L, M)
    sortProcess(arr, assistArr2, M + 1, R)
    merge(assistArr2, assistArr1, L, M, R)
  }
}
// ��������������(arr1, arr2)�ϲ���һ������arr2
function merge(arr1, arr2, L, M, R) {
  // û��ҪΪ��ʡһ������, Ȼ���ô����������
  let p1 = L  // traverse of arr1's left side can use 'L++' directly, but in this place shoud use one more variable
  let p2 = M + 1  // for the traverse of arr1's right side
  let i = L   // for arr2's traverse
  for(; p1 <= M && p2 <= R; i++) {
    if(arr1[p1] <= arr1[p2]) {
      arr2[i] = arr1[p1++]
    } else {
      arr2[i] = arr1[p2++]
    }
  }
  // which can be writed as:
  // while(p1 <= M) {
  //   arr2[i++] = arr1[p1++]
  // }
  if(p1 <= M) {
    for(let j = 0; j <= M - p1; j++) {
      arr2[i + j] = arr1[p1 + j]
    }
  }
  if(p2 <= R) {
    for(let k = 0; k <= R - p2; k++) {
      arr2[i + k] = arr1[p2 + k]
    }
  }
}
function test() {
  const arr = [12, 4223, 12, 4, 1212, 421]
  mergeSort(arr)
  console.log(arr);
}
test()