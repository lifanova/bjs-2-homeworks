function compareArrays(arr1, arr2) {
  let result = true;

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error("[compareArrays]: Error: Оба аргумента функции должны быть массивами!");
    return false;
  }

  if (arr1.length != arr2.length) {
    console.log("[compareArrays]: Длины массивов не равны!");
    return false;
  }

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      res = false
    }
  })

  return result;
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}
