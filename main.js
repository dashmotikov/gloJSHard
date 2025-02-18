'use strict';

let lang = 'ru';

let ruDays = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];
let enDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

//Решение через if
if (lang === 'ru') {
  console.log(ruDays);
} else if (lang === en) {
  console.log(enDays);
}

//Решение через switch-case

switch (lang) {
  case 'ru':
    console.log(ruDays);
    break;
  case 'en':
    console.log(enDays);
    break;
}

//Усложненное задание № 2

let namePerson = 'Артем';
namePerson === 'Артем'
  ? console.log('Директор')
  : namePerson === 'Александр'
  ? console.log('Преподаватель')
  : console.log('Студент');
