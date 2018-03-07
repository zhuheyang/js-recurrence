for(let i = 1; i < 5; i++) {
  let j = 'dd'
  // you can also write it as: let str = String(i) + '_' + String(j)
  // there only has .toLocaleString(), toString(), valueOf(), but not .stringOf(), so be careful!
  let str = i + '_' + j
  console.log(str);
}
// 1_dd
// 2_dd
// 3_dd
// 4_dd