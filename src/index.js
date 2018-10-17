module.exports = function getZerosCount(number, base) {
  // your implementation

  // using https://math.stackexchange.com/questions/226868/number-of-trailing-zeros-in-a-factorial-in-base-b
  let tempBase = base;
  let maxNumber = Number.MAX_VALUE; //  Самое большое число

  for (let i = 2; i <= tempBase; i++) { //  т.к. база начинается с двойки
    if (tempBase % i === 0) {
      let denominator = 0; //  p in formula

      while (tempBase % i === 0) {
        tempBase /= i; //  Получаем нижний порог базы 
        denominator++;
      }

      let innerRes = Math.floor(number / i);

      let count = 0;
      while (innerRes > 0) {
        count += innerRes;
        innerRes = Math.floor(innerRes / i);
      }

      maxNumber = Math.min(maxNumber, Math.floor(count / denominator));
    }
  }

  return maxNumber;

}