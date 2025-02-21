'use strict';

let arr = ['123', '3698741', '6541793', '45693', '7412369', '9874123', '25879'];

arr.forEach((item, index) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

let n = 100;

primeNumbers: for (let i = 2; i <= n; i++) {
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) continue primeNumbers;
  }
  console.log(`${i} - Делители этого числа: 1 и ${i}`);
}

/*for (let i = 0; i <= 100; i++) {
  let cnt = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      cnt++;
    }
  }
  if (cnt === 2) {
    console.log(`Число ${i}: Делители этого числа 1 и ${i}`);
  }
}*/
