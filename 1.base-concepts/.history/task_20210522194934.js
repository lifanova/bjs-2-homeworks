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
  let totalAmount = 0;

  if (typeof (percent) == 'string') {
    percent = Number(percent);
  }

  if (typeof (contribution) == 'string') {
    contribution = Number(contribution);
  }

  if (typeof (amount) == 'string') {
    amount = Number(amount);
  }


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
  // разница между датами в годах
  let tmp = date.getYear() - today.getYear();
  if (tmp == 0) {
    //текущий год
    months = date.getMonth() - today.getMonth();
  } else {
    // (12 - today.getMonth()) - число месяцев от текущего месяца до конца года
    // 
    months = (12 - today.getMonth()) + date.getMonth() + 12 * (tmp - 1);
  }

  // ежемесячный платеж  
  let p = percent / 100 / 12;
  let monthPayment = creditBody * (p + p / (Math.pow(1 + p, months) - 1));

  console.log("monthPayment " + monthPayment);
  // итоговая сумма
  //totalAmount = contribution;
  totalAmount += monthPayment * months;

  // округляем до 2-х знаков после запятой
  totalAmount = Math.floor(totalAmount * 100) / 100;

  console.log("Общая сумма: " + totalAmount);

  return totalAmount;
}
