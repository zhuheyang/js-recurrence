function printAllPermutations(string) {
  chs = string.split('')
  process1(chs, 0)
}
function process1(chs, i) {
  if(i == chs.length) {
    console.log(chs.join(''));
  }
  for(let j = i; j < chs.length; j++) {
    swap(chs, i, j)
    process1(chs, i + 1)
    swap(chs, j, i)  // this is important!
  }
}
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function test() {
  let str = 'abc'
  printAllPermutations(str)
}
test()

// add the second swap(chs, j, i) is necessary
// or the result will truns like :
// the line 1, 2 is the same as 5, 6 line, as is showed below:
// abc  
// acb
// cab
// cba
// abc
// acb

// correct result is :
// abc
// acb
// bac
// bca
// cba
// cab

