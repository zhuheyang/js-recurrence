# ���ֲ��ҵ�����

���ֲ���һ�����������������ֲ���ĳ��ֵ, ʱ�临�Ӷ�ΪO(logN), �ǳ�Ѹ��. ����û���޶����ֲ��ҷ�ֻ��Ӧ���������������ֵ������

## ����ֲ���Сֵ�Ĳ���

`arr.length >= 2`, ���ڸ�������, ���`arr[0] < arr[1]` ���� `arr[arr.length - 2] < arr[arr.length - 1]`, ��arr[0], ����arr[arr.length - 1]��Ϊ��ֲ���Сֵ 
�������м�, ���`arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]`, ��arr[mid]��Ϊ��ֲ���Сֵ.  
����Ŀ����һ����arr, ������ֵ�������, Ҫ���������һ�����еľֲ���Сֵ.

### �����ⷨ

����һ��, ÿ�ζ������ߵ�ֵ�����ж�, true������, ȱ����Ǹ��Ӷ�ΪO(N)

```js
function findLocalMinimum1(arr) {
    if(arr[0] < arr[1]) {
        return arr[0]
    } else if(arr[arr.length - 1] < arr[arr.length - 2]) {
        return arr[arr.length - 1]
    } else {
        for(let i = 1; i < arr.length - 1; i++) {
            if(arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
                return arr[i]
            }
        }
    }
}
```

### ���ַ��Ľⷨ

һ��, ���ȶ����ж�arr[0]λ���Լ�arr[arr.length - 1]λ���Ƿ�Ϊ�ֲ���Сֵ, �����, ��return����.  
���û��, ���������߾�����������, ���м��Ӧ������ѧ�еļ�Сֵ(Ҳ���ֲ���Сֵ). ��ʱ��ȡ��ֵ�����ж�. �����ֵ��Ϊ�ֲ���Сֵ.  
��ôarr(0 ~ mid)�Լ�arr(mid ~ arr.length - 1)��������Χ�ڱ���һ��Ϊ��Сֵ, ��Ϊ��Χ�ھ������µ�����, ���ʱ��ȡһ�ߵ���ֵ���м������жϼ���

```js
function findLocalMinimum_BS(arr) {
    // �����жϼ������, arrΪnull, ��δ��ֵ
    if(arr == null || arr.length = 0) {
        return -1  // no exist
    }
    // �ж�arr.length <= 2 �����
    if(arr.length == 1 || arr[0] < arr[1]) {
        return arr[0]
    }
    // �ж�arr.length > 2 �����
    if(arr[arr.length - 1] < arr[arr.length - 2]) {
        return arr[arr.length - 1]
    }
    let left = 1
    let right = arr.length - 2
    let mid = 0
    while(left < right) {
        mid = left + ((right - left) >> 1)
        if(arr[mid] > arr[mid - 1]) {
            right = mid - 1
        } else if(arr[mid] > arr[mid + 1]) {
            left = mid + 1
        } else {  // which means arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]
            return mid
        }
    }
    return left
}
```

## JS�汾�Ķ��ַ�ʵ��

```js
Array.prototype.binarySearch = function(low, high, khey) {
    if(low > high) {
        return -1
    }
    const mid = parseInt(low + (high - low) / 2)
    if(this[mid] > khey) {
        return this.binarySearch(low, mid - 1, khey)
    }
    if(this[mid] < khey) {
        return this.binarySearch(mid + 1, high, khey)
    }
    return mid
}
```
