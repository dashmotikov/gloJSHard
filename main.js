'use strict';

let arr = ['123', '3698741', '6541793', '45693', '7412369', '9874123', '25879'];

arr.forEach((item, index) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});
