// 创建二维数组的话, 想对其赋值是不行的, 是不能够使用let of循环或者forEach循环对其item进行赋值的
// 且forEach循环返回值为undefined, 也即无返回值: return;
let a = new Array(3)
for(let i = 0; i < a.length; i++) {
  a[i] = new Array(3)
}
console.log(a)  // [ [ <3 empty items> ], [ <3 empty items> ], [ <3 empty items> ] ]

let b = new Array(3)
for(let item of b){
  item = new Array(3)
}
console.log(b)  // [ <3 empty items> ]

let c = new Array(3)
const d = c.forEach(item => item = new Array(3))
console.log(c)  // [ <3 empty items> ]
console.log(d)  // undefined

let e = new Array(3)
e.forEach(item => item = 1)
console.log(e)  // [ <3 empty items> ]

let f = new Array(3)
for(let item of f){
  console.log(item);  // print 3 undefined in 3 line
  item = 2
}
console.log(f)

let g = new Array(3)
for(item in g){
  console.log(item)  // print nothing, because there is no indexes, undefined has not index
} 

let h = [12, 332, 121]
for(let item in h){
  console.log(item)
}
// print the "h" arr's index:
// 1
// 2
// 3
