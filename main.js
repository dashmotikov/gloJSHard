let test = '123456789012345678901234567890123456';

function cutString(string) {
  if (typeof string !== 'string') {
    //если передали не строку - выкинуть ошибку и выйти из программы
    console.error('Вы передали не строку');
    return;
  }

  string = string.trim();
  if (string.length > 30) {
    return string.split('').slice(0, 30).join('') + '...';
  }

  return string;
}

console.log(cutString(test));
