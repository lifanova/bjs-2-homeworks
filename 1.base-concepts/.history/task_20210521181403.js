function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    console.log("Корней нет");
  } else if (d == 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }

  return arr;
}

/**
 * percent - процентная ставка
 * contribution - сумма первоначального взноса
 * amount - сумма кредита
 * date - дата окончания кредита
 */
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // проверки входных данных
  if(percent == null || typeof(percent) != Number || percent < 0) {
    console.log("[calculateTotalMortgage]: Error: некорректная процентная ставка!");
    return -1;
  }

  if(contribution == null || typeof(contribution) != Number || contribution < 0) {
    console.log("[calculateTotalMortgage]: Error: некорректная сумма первоначального взноса!");
    return -1;
  }

  if(amount == null || typeof(amount) != Number || amount < 0) {
    console.log("[calculateTotalMortgage]: Error: некорректная сумма кредита!");
    return -1;
  }

  if(date == null || typeof(date) != Date) {
    console.log("[calculateTotalMortgage]: Error: некорректная дата погашения кредита!");
    return -1;
  }

  // тело кредита
  let creditBody = amount - contribution;

  // считаем кол-во месяцев
  let today = new Date();
  if(today.getYear() > date.getYear()) {
    console.log("[calculateTotalMortgage]: Error: некорректная дата погашения кредита!");
    return -1;
  }

  let months = 0;
  if (date.getYear() == today.getYear()) {
    months = date.getMonth() - today.getMonth();
  } else if (date.getYear() > today.getYear()) {
    months = ( 12 - today.getMonth()) + date.getMonth();
  }

  // ежемесячный платеж
  percent = percent / 100;
  let p = percent / 12;
  let monthPayment = creditBody * (p + p / ((Math.pow(1 + p, months) - 1)));

  // итоговая сумма
  totalAmount = contribution + monthPayment * months;
  // округляем до 2-х знаков после запятой
  totalAmount = Math.floor(totalAmount * 100) / 100;

  console.log("Общая сумма: " + totalAmount);

  return totalAmount;
}
