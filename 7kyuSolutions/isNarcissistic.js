function isNarcissistic(n) {
let arr =  Array.from(n.toString()) 
  let p = arr.length
  let total = 0
  
 
 let each = arr.forEach((num) => {
     total += Math.pow(num, p)
 })

 return n === total ? true : false
}
