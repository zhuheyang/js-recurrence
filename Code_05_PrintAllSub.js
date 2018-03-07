function printAllSubsequence(arr) {
  if(arr == null || arr.length == 0) {
    return 
  }
  return printProcess(arr, 0, '')
}
function printProcess(arr, index, pre) {
  if(index == arr.length) {
    if(pre != '') {
      console.log(pre)
    }
    return
  }
  printProcess(arr, index + 1, pre + arr[index])
  printProcess(arr, index + 1, pre)
}
function test() {
  const str = 'abc'
  printAllSubsequence(str.split(''))
}
test()

// abc
// ab
// ac
// a
// bc
// b
// c
