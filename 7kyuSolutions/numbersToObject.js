// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// --- Solution

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