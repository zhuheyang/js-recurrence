// ���ض�Ӧֵ, Ҳ��value, ������arr�ж�Ӧ��index
function binarySearchReverse(arr, left, right, value) {
  if (left == right) {
    return arr[left] == value ? left : undefined
  }
  const mid = left + ((right - left) >> 1)
  if (arr[mid] == value) {
    return mid
  } else if (arr[mid] > value) {
    return binarySearchReverse(arr, left, mid - 1, value)
  } else {
    return binarySearchReverse(arr, mid + 1, right, value)
  }
}
// ע��������Ե���������Ϊ������Ϊ��С�����, ���Ϊ��������, ��Ӧ���ж�����Ӧ��Ϊ:
// if(arr[mid] > value) {left = mid + 1} else if(arr[mid] < value) {right = mid - 1}
function binarySearchIteration(arr, left, right, value) {
  let mid
  while (left < right) {
    mid = left + ((right - left) >> 1)
    if (arr[mid] == value) {
      return mid
    } else if (arr[mid] > value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  // ���һ��������ȷ��֤��: 
  // ��ֵ�����������: 
  // 1. ���ķֶ���3��indexΪ: 1, 2, 3 ��ֵΪ2, mid - 1 = 1, mid + 1 = 3. Ҳ�����ֽ����Ϊleft == right
  // 2. ���ķֶ�Ϊ����index: (2, 3), if arr[mid] != value, ��arr[mid] > value, ��right = 2 - 1 = 1, ����while(left < right)ѭ��
  //    ����arr[left] != value, Ҳ��undefined, ���Ͻ��
  //    if(arr[mid] < value) {left = 2 + 1 = 3} then �����, left == right, Ҳ������ȷ�Ľ��
  return arr[left] == value ? left : undefined
}
function test() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(binarySearchReverse(arr, 0, arr.length - 1, 2));  // 2
  console.log(binarySearchIteration(arr, 0, arr.length - 1, 2));  // 2
  const arr1 = [2, 6, 8, 12, 65, 211, 444, 121212]
  console.log(binarySearchReverse(arr1, 0, arr1.length - 1, 8));
  // ���һ�����(arr[left] == value ? left : undefined����ȷ��֤��: 
  // ���ʣ����indexû�бȽ�ʱ, ���ǽ�С��index��Ϊmid, ���mid != value, ��arr[mid] > value, �༴˵��valueӦ�ڽ�Сindex�����ʱ
  // Ӧ������false��undefined����, ���arr[mid] < value, ��value��mid���ұ�, ��ʱ(left = mid + 1) == right, ����whileѭ��returnʱ, ��֤
  // arr[left]�༴��֤arr[right], �޴�
  console.log(binarySearchIteration(arr1, 0, arr1.length - 1, 8));
}
test()
// ����Ƿ����Ƿ����, ��Ȼ����ֵΪ true �� false ���һ��, �������Լ�д��ʱ�����뷵������ֵ
// ��˴������������ʱ, ����undefined�������ʹ��ʱ������