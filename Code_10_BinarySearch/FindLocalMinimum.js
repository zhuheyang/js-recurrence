// �����ⷨ
// �������ǰ���Ѿ������е�ֵ���������, ��ʵ�����岻��, �����������㷨˼άʮ���а���
function findLocalMinimum1(arr) {
  if(arr[0] < arr[1]) {
      return arr[0]
  } else if(arr[arr.length - 1] < arr[arr.length - 2]) {
      return arr[arr.length - 1]
  } else {
      for(let i = 1; i < arr.length - 1; i++) {
          if(arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
              return arr[i]
          }
      }
  }
}
function findLocalMinimum_BS (arr) {
    if(arr == null || arr.length == 0) {
      return -1  // no exist
    }
    if(arr.length == 1 || arr[0] < arr[1]) {
      return 0
    }
    if(arr[arr.length - 1] < arr[arr.length - 2]) {
      return arr.length - 1
    }
    let left = 1
    let right = arr.length - 2
    let mid = 0
    while(left < right) {
      mid = left + ((right - left) >> 1)
      if(arr[mid] > arr[mid - 1]) {
        right = mid - 1
      } else if(arr[mid] > arr[mid + 1]) {
        left = mid + 1
      } else {
        return mid
      }
    }
    // ��������ֲ�ͬ, �������left > right�����, ֻ����left == right�����, ����ֲ���Сֵ�ж������Ͳ���������
    // ��left == rightʱ, ��ʱ��Ӧ��arr[left]����ֵ��Ϊ�ֲ���Сֵ
    // ��������retrun right ���޲���
    return left
}
function test() {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(findLocalMinimum1(arr1));  // return value : 1
    console.log(findLocalMinimum_BS(arr1));  // return index 0
    const arr2 = [2, 1, 3, 4, 5, 6, 7, 8]  
    console.log(findLocalMinimum1(arr2));  // return value : 1
    console.log(findLocalMinimum_BS(arr2));  // return index 1
    const arr3 = [4, 3, 1, 4, 5, 6, 7, 8]
    console.log(findLocalMinimum1(arr3));  // return value: 1
    console.log(findLocalMinimum_BS(arr3));  // return index 2
    // arr2��, ������indexΪ1, 2, Ҳ��ֵΪ(1, 3)֮����mid, ��ʱ��mid��Ϊ�ֲ���Сֵ
    // ������arr3�е����, ��index Ϊ1, 2, Ҳ��ֵΪ(3, 1)����mid, ����arr[mid] > arr[mid + 1] 
    // ��left = mid + 1 (which equals right = 2), ������whileѭ��, ��ʱ����left ���� right ����
}
test()