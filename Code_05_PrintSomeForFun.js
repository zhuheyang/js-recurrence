// just for fun
function printSomeSequence(str) {
  let chs = str.split('')
  printProcess(chs, 0)
}
function printProcess(chs, i) {
  if(i == chs.length) {
    console.log(chs.join(''));
    return
  }
  printProcess(chs, i + 1)
  const temp = chs[i]
  chs[i] = 0
  printProcess(chs, i + 1)
  chs[i] = temp
}

const str = 'abc'
printSomeSequence(str)


// abc
// ab0
// a0c
// a00
// 0bc
// 0b0
// 00c
// 000