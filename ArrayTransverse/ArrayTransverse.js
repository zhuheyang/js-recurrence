let arr = [12,, 23, 2545, 23, 112, 22]
console.log(arr);
for(let item of arr) {
  console.log(item);
}
console.log('let of is done');
for(let item = 0; item < arr.length; item++) {
  console.log(arr[item]);
}
console.log('for is done');
arr.forEach(item => console.log(item))
console.log('forEach is done');

// > let a = [12, 23, 423, 23, 232]
// > for(let ab of a) {
//   ... console.log(ab);
//   ... }
//   12
//   23
//   423
//   23
//   232
//   undefined   // ��������undefined��ϵͳָ����, �����Ļ�, �ڳ���ִ������û�е�
