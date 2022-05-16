// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// ---- Solution

function findShort(s){
    let word = s.split(' ')
    let arr = [];
    for(let i=0; i<word.length; i++){
       for(let j=0; j<word[i].length; j++){
            arr.push(word[i].length)
       
       }
    }
    return Math.min(...arr);
}
