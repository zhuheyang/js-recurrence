// Java中的字符串转数组有专门的方法: str.toCharArray(), 会返回一个以str中每个字符构成的数组
// char[] chs = str.toCharArray();
// JS中使用字符串的方法split, 之后即可利用数组的方法对字符进行批量处理或操作, 之后再用join还原即可
function StringToCharArray() {
  let str = 'Beijing'
  let arr = str.split('')
  console.log(arr);   // [ 'B', 'e', 'i', 'j', 'i', 'n', 'g' ]
  arr.reverse()
  console.log(arr);  // [ 'g', 'n', 'i', 'j', 'i', 'e', 'B' ]
  let newStr = arr.join('')
  console.log(newStr);  // gnijieB
}
StringToCharArray()
