// JS�г���"+"������Ὣ������ת��Ϊ�ַ���, ��������������Ὣ������ת��Ϊ��ֵ, ����һԪ�����
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