# JS中的数值转换

JS在三种情况下会发生自动的转换, 分别为: 不同类型的数据互相运算, 对非布尔值类型的数据求布尔值, 对非数值类型的值使用一元运算符'+' , '-'

## Number()

Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。

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

String方法背后的转换规则，与Number方法基本相同，只是互换了valueOf方法和toString方法的执行顺序。

## Boolean()

除undefined, null , ''(空字符串), -0 或 +0, NaN的转换结果为false, 其它均为true