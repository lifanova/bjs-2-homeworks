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

  // тело кредита
  let creditBody = amount - contribution;

  // кол-во месяцев
  let today = new Date();
  let months = date.getMonth() - today.getMonth();

  // ежемесячный платеж
  let p = percent / 12;
  let monthPayment = creditBody * (p + p / ((Math.pow(1 + p, months) - 1)));

  // итоговая сумма
  totalAmount = contribution + monthPayment * months;
  // округляем до 2-х знаков после запятой
  totalAmount = Math.floor(totalAmount * 100) / 100;

  console.log("Общая сумма: " + totalAmount);

  return totalAmount;
}
