function getAllPemutationsNotRepeat(string) {
  let chs = string.split('')
  process2(chs, 0)  // it returns undefined, so do not use 'return' statement!
}
function process2(chs, i) {
  if(i == chs.length) {
    console.log(chs.join(''));
  }
  // �����newSet����ȫ����, ��ô'acc'����ַ�����������process2����Ҳͨ������if�ж���
  // set�ṹ���ж�Ӧ��ÿ�ε�process2�е�forѭ��֮ǰ����, ����ÿ���µ�process2(i + 1)�ĵݹ��ж����½���һ������!
  let set = new Set()
  for(let j = i; j < chs.length; j++) {
    if(!set.has(chs[j])) {
      set.add(chs[j])
      swap(chs, i, j)
      process2(chs, i + 1)
      swap(chs, j, i)  // this is important
    }
  }
}
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function test() {
  let string = 'acc'
  getAllPemutationsNotRepeat(string)
}
test()