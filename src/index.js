module.exports = function getZerosCount(number, base) {
  // debugger;
  // your implementation
  var count = 0;
  var n = 2;
  var halfBase = 0;
  while (base % n != 0) {
    n++;
  }
  halfBase = base == 2 ? 2 : base / n;

  //простая задача, стандартная на алгоритмы. Нам необходимо подсчитать количество 5-к в числе number(т.к. 0 дает только произведение 2*5, 2 априори больше(в числах от 1 до 10, только две 5-ки и пять двоек во множителях)). Поэтому мы делим нацело число на 5 с округлением вниз. Т.К. числа включают в себя еще 5-ки(например в числе 25 не одна 5-ка, а две), то проджаем в цикле делить остатки на 5, до тех пор пока не получим число меньше 5.
  while (number >= halfBase) {
    number = Math.floor(number / halfBase);
    count += number;
  }
  return count;
}