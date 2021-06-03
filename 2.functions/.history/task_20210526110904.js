// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[1];
  sum = 0;
  for (let a of arr) {
    if (a < min) {
      min = a;
    }

    if (a > max) {
      max = a;
    }

    sum += a;
  }

  avg = sum / arr.length;

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...

  return max
}
