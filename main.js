let num = 266219;
let res = 1;

for (let i = 0; i < num.toString().length; i++) {
  res *= Number(num.toString()[i]);
}
console.log(res);

let res2 = res ** 3;
console.log(res2);

let res3 = String(res2).slice(0, 2);
console.log(res3);
