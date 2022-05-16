function numObj(s){
  // const obj = {};

  // s.forEach(element => {
  //   obj[element] = '';
  // });
  //  obj.map((v,i)=>v[char[i]]=arr[i])
    // const arr=[];
    // s.map(v=>arr.push(String.fromCharCode(v)))
    // const obj=Array.from({length:s.length},x=>x={});
    // obj.map((v,i)=>v[s[i]]=arr[i])
    // return obj

    const arr = []
    for(i=0; i<s.length;i++){
      const obj = {}
      obj[s[i]] = String.fromCharCode(s[i])
      arr.push(obj)
    }
    return arr
  }
  
  console.log(numObj([101,121,110,113,113,103]));