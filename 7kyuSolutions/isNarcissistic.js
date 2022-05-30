function isNarcissistic(n) {
let arr =  Array.from(n.toString()),  p = arr.length, total = 0
  arr.forEach((num) => {
     total += Math.pow(num, p)
 })

 return n === total ? true : false
}
