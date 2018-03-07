// Reverse Version
function cowNumber(year, initNumber) {
  if(year < 1) {
    return 0
  }
  if(year == 1 | year == 2 | year == 3) {
    return year * initNumber
  }
  return cowNumber(year - 1, initNumber) + cowNumber(year - 3, initNumber)
}

// Iteration Version
function cowNumber2(year, initNumber) {
  if(year < 1) {
    return 0 
  }
  if(year == 1 | year == 2 | year == 3) {
    return year * initNumber
  }
  // res 代表当前year - 1年的母牛数, pre则为year - 2, prepre则为year - 3
  let res = 3 * initNumber
  let pre = 2 * initNumber
  let prepre = initNumber
  let temp1 = 0
  let temp2 = 0
  for(let i = 4; i <= year; i++) {
    temp1 = res
    temp2 = pre
    res = res + prepre
    pre = temp1
    prepre = temp2
  }
  return res
}

function test(){
  console.log(cowNumber(4,1));  // 4
  console.log(cowNumber(4,1));  // 4
  console.log(cowNumber(6, 1));  // 9
  console.log(cowNumber2(6, 1));  // 9
}
test()