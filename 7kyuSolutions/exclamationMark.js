function remove (string) {
  //coding and coding....
  let newArr = string.split(' ')
  let filtered = newArr.filter((el)=>!el.match(/!/g) || el.match(/!/g).length > 1)
  if(filtered.length === 1) return filtered.join('')
  else if(filtered.length === 0) return ''
  else return filtered.join(' ')
}

// remove("Hi! !Hi! Hi!") !Hi!
