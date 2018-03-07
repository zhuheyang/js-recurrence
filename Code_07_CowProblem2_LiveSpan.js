// if a cow's live is ten years, then the formula can be changed like this:
// f(n) = f(n - 1) + f(n - 3) - f(n - 10)
function cowNumberWithLiveSpan(year, initNumber) {
  if(year < 1) {
    return 0
  }
  if(year == 1 | year == 2 | year == 3) {
    return year * initNumber
  }
  return cowNumberWithLiveSpan(year - 1, initNumber) + cowNumberWithLiveSpan(year - 3, initNumber) - cowNumberWithLiveSpan(year - 10, initNumber)
}

// then 这个写成迭代版本就有点麻烦了, f(n - 10)的迭代表示暂时没有想法
function cowNumberWithLiveSpan2(year, initNumber) {
  if(year < 1) {
    return 0
  }
  if(year == 1 | year == 2 | year == 3) {
    return year * initNumber
  }
  let res = 3 * initNumber
  let pre = 2 * initNumber
  let prepre = initNumber
  let temp1 = 0
  let temp2 = 0
  for(let i = 4; i <= year; i++) {
    temp1 = res
    temp2 = pre
    // 注意for循环中计算时, 使用的应该为i - 10, 而不是 year - 10, 否则结果就相悖了
    // namely change ' year - 10 ' to ' i - 10 '
    res = res + prepre - cowNumberWithLiveSpan(i - 10, initNumber)
    pre =  temp1
    prepre = temp2
  }
  return res
}
function test() {
  console.log(cowNumberWithLiveSpan(9, 1));  // 28
  console.log(cowNumberWithLiveSpan(10, 1));  // 41
  console.log(cowNumberWithLiveSpan(11, 1));  // 59
  console.log(cowNumberWithLiveSpan(12, 1));  // 86
  console.log(cowNumberWithLiveSpan2(9, 1));  // 28
  console.log(cowNumberWithLiveSpan2(10, 1));  // 41
  console.log(cowNumberWithLiveSpan2(11, 1));  // 59
  console.log(cowNumberWithLiveSpan2(12, 1));  // 85

}
test()