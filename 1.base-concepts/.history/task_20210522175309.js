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

  if (typeof (percent) == 'string') {
    percent = Number(percent);
  }
  
  contribution = Number(contribution);
  amount = Number(amount);

  console.log(typeof (percent));
  console.log(typeof (contribution));
  console.log(typeof (amount));
  console.log(typeof (date));

  // проверки входных данных
  if (percent == null || percent <= 0) {
    console.log("[calculateTotalMortgage]: Error: некорректная процентная ставка!");
    return -1;
  }

  // if(contribution == null || typeof(contribution) != Number || contribution < 0) {
  //   console.log("[calculateTotalMortgage]: Error: некорректная сумма первоначального взноса!");
  //   return -1;
  // }

  // if(amount == null || typeof(amount) != Number || amount < 0) {
  //   console.log("[calculateTotalMortgage]: Error: некорректная сумма кредита!");
  //   return -1;
  // }

  // if(date == null || typeof(date) != Date) {
  //   console.log("[calculateTotalMortgage]: Error: некорректная дата погашения кредита!");
  //   return -1;
  // }

  // тело кредита
  let creditBody = amount - contribution;
  console.log(creditBody);

  // считаем кол-во месяцев
  let today = new Date();
  if (today.getYear() > date.getYear()) {
    console.log("[calculateTotalMortgage]: Error: некорректная дата погашения кредита!");
    return -1;
  }

  let months = 0;
  if (date.getYear() == today.getYear()) {
    months = date.getMonth() - today.getMonth();
  } else if (date.getYear() > today.getYear()) {
    months = (12 - today.getMonth()) + date.getMonth();
  }

  months = 12;

  // ежемесячный платеж  
  let p = percent / 100 / 12;
  let monthPayment = creditBody * (p + p / (Math.pow(1 + p, months) - 1));

  console.log("monthPayment " + monthPayment);
  // итоговая сумма
  totalAmount = contribution;
  if (monthPayment > 0) {
    totalAmount += monthPayment * months;
  }

  console.log("months " + months);
  console.log("contribution " + contribution);
  console.log("totalAmount " + totalAmount);
  // округляем до 2-х знаков после запятой
  totalAmount = Math.floor(totalAmount * 100) / 100;

  console.log("Общая сумма: " + totalAmount);

  return totalAmount;
}
