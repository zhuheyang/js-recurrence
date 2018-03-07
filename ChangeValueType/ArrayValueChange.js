let arr = [123, 2124, 212]
console.log(String(arr));  // 123,2124,212
console.log(arr.toString());  // 123,2124,212
console.log(arr.valueOf());   // [ 123, 2124, 212 ]
console.log(arr.toLocaleString());  // 123,2,124,212  // 因为千位数要用逗号分隔开, 所以2124显示为2,124

// you can use .join() method to make it a real string
let str = arr.join('')
console.log(str);  // 1232124212

// or you can use String.split('seperator') to make a String be an Array
let arr2 = str.split('')
console.log(arr2);  // [ '1', '2', '3', '2', '1', '2', '4', '2', '1', '2' ]