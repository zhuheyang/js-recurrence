// �����ⷨ
function maxAbs1(arr) {
  let max = Number.MIN_VALUE 
  for(let i = 0; i < arr.length - 1; i++) {
    let maxLeft = Number.MIN_VALUE
    let maxRight = Number.MIN_VALUE
    for(let j = 0; j <= i; j++) {
      maxLeft = Math.max(maxLeft, arr[j])
    }
    for(let k = arr.length - 1; k > i; k--) {
      maxRight = Math.max(maxRight, arr[k])
    }
    max = Math.max(max, Math.abs(maxLeft - maxRight))
  }
  return max
}

// Ԥ��������ⷨ
function maxAbs2(arr) {
  let max = Number.MIN_VALUE
  let asistLeft = new Array(arr.length)
  let asistRight = new Array(arr.length)
  asistLeft[0] = arr[0]
  asistRight[arr.length - 1] = arr[arr.length - 1]
  // ��������1�Ĺ���
  for(let i = 1; i < arr.length; i++) {
    asistLeft[i] = Math.max(asistLeft[i - 1], arr[i])
  }
  // ��������2�Ĺ���
  // or you can write as : j > -1
  for(let j = arr.length - 2; j >= 0; j--) {
    asistRight[j] = Math.max(asistRight[j + 1], arr[j])
  }
  // asistLeft: [0     , 0~1  , 0~2  , 0~3  , ```  0~n-2, 0~n-1 ]
  // asistRight: [n-1~0, n-1~1, n-1~2, n-1~3, ```  1    , 0     ]
  // ����Ҫע��, �Ƚϵ�ӦΪasistLeft(0 ~ n - 2), �Լ�assitRight(1 ~ n - 1)
  // ������Ҫ���� 0 ~ n-1, �Լ� n - 1 ~ 0�������ıȽ�. ��Ȼ�������ȷ�Բ���Ӱ��.
  for(let k = 0; k < arr.length - 1; k++) {
    max = Math.max(max, Math.abs(asistLeft[k] - asistRight[k + 1]))
  }
  return max
}

// ���Žⷨ
function maxAbs3(arr) {
  let arrMax = Number.MIN_VALUE
  for(let i = 0; i < arr.length; i++) {
    arrMax = Math.max(arrMax, arr[i])
  }
  return Math.max(Math.abs(arrMax - arr[0]), Math.abs(arrMax - arr[arr.length - 1]))
}

function test() {
  const arr = [2, 41, 5, 1, 52, 5]
  console.log(maxAbs1(arr));  // 50
  console.log(maxAbs2(arr));  // 50
  console.log(maxAbs3(arr));  // 50
}
test()