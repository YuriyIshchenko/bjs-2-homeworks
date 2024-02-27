function getArrayParams(...arr) {
  if (arr.length <= 0) return 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length <= 0) return 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length <= 0) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 0) return 0;
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length <= 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      countEvenElement++;
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if (maxWorkResult < max) {
      maxWorkResult = max;
    }
  }
  return maxWorkResult;
}
