function minSum(arr) {
  // your code here
  let sorted = arr.sort((a, b) => a - b);
  let sum = 0;
  let length = arr.length / 2;
  for (let i = 1; i <= length; i++) {
    sum += sorted[0] * sorted[sorted.length - 1];
    sorted.shift();
    sorted.pop();
  }
  return sum;
}
