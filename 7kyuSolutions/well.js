function well(x){
let count = 0;

for (let i = 0; i < x.length; i++){
    for(let j = 0; j < x[i].length; j++){
       /good/i.test(x[i][j]) ? count++ : null
    } 
}
    if(count === 0){
        return 'Fail!'
    } else return count > 2 ? 'I smell a series!' : 'Publish!'
}
