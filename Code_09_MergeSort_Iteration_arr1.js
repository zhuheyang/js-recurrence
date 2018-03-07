function merge(arr, temp, left, mid, right) {
  let p1 = left
  let p2 = mid + 1
  let i = left
  // ��������ϲ�arr�е������������е�temp��
  while(p1 <= mid && p2 <= right) {
    if(arr[p1] <= arr[p2]) {
      temp[i++] = arr[p1++]
    } else {
      temp[i++] = arr[p2++]
    }
  }
  while(p1 <= mid) {
    temp[i++] = arr[p1++]
  }
  while(p2 <= right) {
    temp[i++] = arr[p2++]
  }
}
// stepΪÿ��merge���������򲿷ֵĳ���: [0, 1, 2, ..., step - 1].length = step
// �ܳ���: i + 2 * step - 1 = (i + step - 1) + step : mergeһ������step�ĳ���
// ����һ��ʼmerge��λ��ӦΪ �ܳ��� + 1: i + 2 * step (�ܼ�, ��Ҳֵ������)
function mergePass(arr, temp, step, length) {
  let i = 0
  while(length - i >= 2 * step) {
    merge(arr, temp, i, i + step - 1, i + 2 * step - 1)
    i = i + 2 * step
  }
  if(length - i > step) {
    merge(arr, temp, i, i + step - 1, length - 1)
  } else {
    for(let j = i; j < length; j++) {
      temp[j] = arr[j]
    }
  }
}
// ����� length, ��mergeSort���ұ߽�, ��mergePass����, ��Ĭ�ϴ���߽�, Ҳ�� 0 ��ʼ���е�
// ͨ��mergePass����, ����ȷ�����յĽ������˳���ع鵽arr������
function mergeSort(arr, length) {
  let step = 1
  let temp = new Array(length)
  // �Ȱ�arr��2��step1���ȵ��������и��ϲ���temp��, �ٽ�temp������step2���ȵ��������и��ϲ���arr��
  while(step < length) {
    mergePass(arr, temp, step, length)
    step *= 2
    mergePass(temp, arr, step, length)
    step *= 2
  }
}
function test() {
  const arr = [12, 42, 12, 423, 12, 42, 23]
  mergeSort(arr, arr.length - 1 >> 1)
  console.log(arr);
  mergeSort(arr, arr.length)
  console.log(arr);
}
test()