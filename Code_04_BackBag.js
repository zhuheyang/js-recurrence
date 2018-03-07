function backBag(weight, value, bag, i, sumWeight, sumValue) {
  if(i == weight.length) {
    return sumValue
  }
  if((sumWeight + weight[i]) <= bag) {
    const add = backBag(weight, value, bag, i + 1, sumWeight + weight[i], sumValue + value[i])
    const notAdd = backBag(weight, value, bag, i + 1, sumWeight, sumValue)
    return  add > notAdd ? add : notAdd
  } else {
    return backBag(weight, value, bag, i + 1, sumWeight, sumValue)
  }
}
function test() {
  let weight = [12, 32, 12]
  let value = [2, 4, 5]
  const bag = 25
  console.log(backBag(weight, value, bag, 0, 0, 0));  // 2 + 5 = 7
  let weight1 = [1, 2, 1, 2, 54, 1]
  let value1 = [54, 32, 12, 11, 0, 12]
  let bag1 = 10
  console.log(backBag(weight1, value1, bag1, 0, 0, 0));  // 54 + 32 + 12 + 11 + 12 = 121
}
test()

function maxValue1(weight, value, bag) {
  return backBag2(weight, value, 0, 0, bag)
}
function backBag2(weight, value, i, cost, bag) {
  if(cost > bag) {
    return Number.MIN_VALUE
  }
  if(i == weight.length) {
    return 0
  }
  return Math.max(backBag2(weight, value, i + 1, cost, bag), value[i] + backBag2(weight, value, i + 1, cost + weight[i], bag))
}
function test2() {
  let weight = [12, 32, 12]
  let value = [2, 4, 5]
  const bag = 25
  console.log(maxValue1(weight, value, 25))  // 2 + 5 = 7
  let weight1 = [1, 2, 1, 2, 54, 1]
  let value1 = [54, 32, 12, 11, 0, 12]
  let bag1 = 10
  console.log(maxValue1(weight1, value1, bag))  // 54 + 32 + 12 + 11 + 12 = 121
}
test2()
