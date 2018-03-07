// ����һ������arr, ��һ������aim, �����������ѡ��arr�е�����, �ܲ����ۼӵõ�aim
// ����true or false, Ϊ����Ŀ, ��������arr�е�Ԫ�ؾ�Ϊ����
function money(arr, aim) {
  return process1(arr, 0, 0, aim)
}
function money2(arr, aim) {
  return process2(arr, 0, 0, aim)
}
function process1(arr, i ,sum, aim) {
  if(sum == aim) {
    return true
  }
  if(i == arr.length) {
    return false
  }
  return process1(arr, i + 1, sum, aim) || process1(arr, i + 1, sum + arr[i], aim)
}
function process2(arr, i, sum, aim) {
  if(i == arr.length) {
    return sum == aim
  }
  return (process2(arr, i + 1, sum, aim) || process2(arr, i + 1, sum + arr[i], aim))
}
function test() {
  let arr = [12, 3, 255, 26, 2, 5]
  console.log(money(arr, 15) + ' ' + money(arr, 124))
  console.log(money2(arr, 15) + ' ' + money2(arr, 124))
}
test()  
// true  false
// true  false