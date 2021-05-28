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

  result = arr1.every((item, index) => item == arr2[index]);

  // Второй способ
  // arr1.forEach((item, index) => {
  //   if (item != arr2[index]) {
  //     result = false;
  //   }
  // });  

  return result;
}

function advancedFilter(arr) {
  let resultArr = [];

  if (!Array.isArray(arr)) {
    console.error("[advancedFilter]: Error: аргумент функции не является массивом!");
    return resultArr;
  }

  resultArr = arr.filter(item => item >= 0)
    .filter(item => item % 3 == 0)
    .map(item => item * 10);

  return resultArr;
}
