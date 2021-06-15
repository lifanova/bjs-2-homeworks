function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    //hash есть array
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);

    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);

      // если длина кэша > 5, то обрезаем его
      if (cache.length > 5) {
        cache.shift();
      }

      //Добавляем ключ - значение в кэш
      let item = {
        hash: hash,
        value: result
      };
      cache.push(item);

      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }

  return wrapper;
}




function debounceDecoratorNew(func, ms) {
  let flag = true;
  let timeout = undefined;

  //Сразу вызываем функцию
  func();  
  
  return function() {
    // Если flag не установлен
    if (flag == false) {
      return;
    }

    clearTimeout(timeout);
    flag = false;
    timeout = setTimeout(func, ms);
   };
}

function debounceDecorator2(func, ms) {  
  let flag = true;
  let timeout = undefined;
  // Счетчик вызовов
  let count = 0;

  //Сразу вызываем функцию
  func();

  return function () {
    // Если flag не установлен
    if (flag == false) {
      return;
    }

    clearTimeout(timeout);
    flag = false;
    timeout = setTimeout(func, ms);
    count++;    
  };
}
