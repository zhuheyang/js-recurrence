# JS�е���ֵת��

JS����������»ᷢ���Զ���ת��, �ֱ�Ϊ: ��ͬ���͵����ݻ�������, �Էǲ���ֵ���͵������󲼶�ֵ, �Է���ֵ���͵�ֵʹ��һԪ�����'+' , '-'

## Number()

Number�����Ĳ����Ƕ���ʱ��������NaN�������ǰ���������ֵ�����顣

```js
var obj = {a: 1}
Number(obj)  // NaN
// which equals to:
if(typeof obj.valueOf() === 'object') {
    return Number(obj.toString())
} else {
    return Number(obj.valueOf())
}
```

## String()

String���������ת��������Number����������ͬ��ֻ�ǻ�����valueOf������toString������ִ��˳��

## Boolean()

��undefined, null , ''(���ַ���), -0 �� +0, NaN��ת�����Ϊfalse, ������Ϊtrue