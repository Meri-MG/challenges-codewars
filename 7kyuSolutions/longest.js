function longest(words) {
    let arr = []
    words.map((word) => {
        
        arr.push(word.length)
    })
  return Math.max(...arr)
}
