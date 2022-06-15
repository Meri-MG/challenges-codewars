const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  if(begin > end) return 0
  return begin + sequenceSum(begin + step, end, step);
};

console.log(sequenceSum(1,5,1), 15)
