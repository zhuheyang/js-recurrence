function getAllPemutationsNotRepeat(string) {
  let chs = string.split('')
  process2(chs, 0)  // it returns undefined, so do not use 'return' statement!
}
function process2(chs, i) {
  if(i == chs.length) {
    console.log(chs.join(''));
  }
  // 如果将newSet放在全局上, 那么'acc'这个字符串进入两次process2就再也通过不了if判断了
  // set结构的判断应在每次的process2中的for循环之前声明, 并且每次新的process2(i + 1)的递归中都重新建立一个才行!
  let set = new Set()
  for(let j = i; j < chs.length; j++) {
    if(!set.has(chs[j])) {
      set.add(chs[j])
      swap(chs, i, j)
      process2(chs, i + 1)
      swap(chs, j, i)  // this is important
    }
  }
}
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function test() {
  let string = 'acc'
  getAllPemutationsNotRepeat(string)
}
test()