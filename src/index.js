module.exports = function getZerosCount(number, base) {
  //thx https://github.com/egorzekov for article http://mathforum.org/library/drmath/view/66749.html

  var count = []; //массив в котором определяется количество нулей для каждого делителя базы, из него выбрать надо минимальное значение 
  var baseDivisors = []; // массив, который содержит простые делители базы
  var repeatDivisor = 1;

  baseDivisors = getAllFactorsFor(base);

  for (var i = 0; i < baseDivisors.length; i++) {
    var currDivisor = baseDivisors[i];
    var tempNumber = number;
    var tempCount = 0;
    if (baseDivisors[i - 1] == currDivisor) {
      repeatDivisor++;
      continue;
    }
    else if (i > 0) {
      count[count.length - 1] = Math.floor(count[count.length - 1] / repeatDivisor);
      repeatDivisor = 1;
    }
    while (tempNumber >= currDivisor) {
      tempNumber = Math.floor(tempNumber / currDivisor);
      tempCount += tempNumber;
    }
    count.push(tempCount);
  }
  if (repeatDivisor > 1) count[count.length - 1] = Math.floor(count[count.length - 1] / repeatDivisor);
  return Math.min(...count);
}

function getAllFactorsFor(remainder) {
  var factors = [], i;

  for (i = 2; i <= remainder; i++) {
    while ((remainder % i) === 0) {
      factors.push(i);
      remainder /= i;
    }
  }
  return factors;
}