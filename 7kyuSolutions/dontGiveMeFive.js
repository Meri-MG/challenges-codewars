function dontGiveMeFive(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    !/5/.test(i) ? count++ : count;
  }
  return count;
}
