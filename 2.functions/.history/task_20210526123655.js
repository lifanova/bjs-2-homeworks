// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  if (arr.length == 0) {
    console.log("[getArrayParams]: Error: Массив пуст!");
    return {};
  }

  min = arr[0];
  max = arr[0];
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
  avg = avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  
  for (let a of arr) {
    sum += a;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...

  return max
}
