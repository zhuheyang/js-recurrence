// Java�е��ַ���ת������ר�ŵķ���: str.toCharArray(), �᷵��һ����str��ÿ���ַ����ɵ�����
// char[] chs = str.toCharArray();
// JS��ʹ���ַ����ķ���split, ֮�󼴿���������ķ������ַ�����������������, ֮������join��ԭ����
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
