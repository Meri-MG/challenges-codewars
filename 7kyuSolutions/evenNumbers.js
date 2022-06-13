function evenNumbers(array, number) {
  // good luck
   return array.filter((v) => v % 2 === 0).splice(-number, number)
}

// evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]
