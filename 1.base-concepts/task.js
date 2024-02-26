"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    let solution = -b / (2 * a);
    arr.push(solution);
  }
  else if (discriminant > 0) {
    let firstSolution = (-b + Math.sqrt(discriminant)) / (2 * a);
    let secondSolution = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(firstSolution, secondSolution);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  percent = percent / 100 / 12;

  let amountDebt = amount - contribution;
  let monthlyPayment = amountDebt * (percent + (percent / ((1 + percent) ** countMonths - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}