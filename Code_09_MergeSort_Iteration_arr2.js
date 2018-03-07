function mergeSort(arr, L, R) {
  let step = 1
  let temp = new Array(R - L + 1)
  // ���ϲ�����step < arr.lengthʱ, �����㹻����������mergeSortһ��
  while(step < R - L + 1) {
    // ͨ����arr��δ���򲿷�ͨ�����ŷ����뵽temp��, �ٴ�temp�������arr, �Ӷ�ʹ��arr���յ�����һ��
    // ��merge������Ҳ�����ظ���temp��������õ�ֵ���¸����arr
    mergePass(arr, temp, step, L, R)
    step *= 2
    mergePass(temp, arr, step, L, R)
    step *= 2
  }
}
function mergePass(arr, temp, step, L, R) {
  // L �ǻ�����whileѭ���Ľ��в��ϱ��, ���ʣ��Ŀռ䲻���Խ���2 * step���������кϲ�������
  // ʹ�ô����L���Խ�ʡһ������, �����ܻ��������, ���ʹ�ö����һ���������ڱ��
  // let i = L   ->  i = i + 2 * step  ->  if(R - i + 1 > step)
  while(2 * step <= R - L + 1) {
    merge(arr, temp, L, L + step - 1, L + 2 * step - 1)
    L = L + 2 * step
  }
  // ����whileѭ����, ��ʱʣ��ռ�(����)���ܴ���һ��step, Ҳ����С��1��step(���� == 0�����)
  if(R - L + 1 > step) {
    merge(arr, temp, L, L + step - 1, R)
  } else {
    for(let i = L; i <= R; i++) {
      temp[i] = arr[i]
    }
  }

}
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
function test() {
  const arr = [12, 42, 512, 423, 12, 42, 23]
  mergeSort(arr, 0, (arr.length - 1) >> 1)  // �����[0, 3]����
  console.log(arr);
  mergeSort(arr, 0, arr.length - 1)  // �����[0, 6]����
  console.log(arr);
}
test()