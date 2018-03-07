// JS中除了"+"运算符会将运算子转换为字符串, 其它的运算符均会将运算子转换为数值, 包括一元运算符
console.log([] * '5');  // 0
console.log([] / '5');  // 0
console.log(true - 1);  // 0 
console.log(false - 1);  // -1

console.log(null + 1);  // 1
console.log(undefined + 1);  // NaN

console.log(+'abdc');  // NaN
console.log(-'sdsd');  // NaN

console.log('5' + {});  // 5[object Object]
console.log('5' + []);  // 5