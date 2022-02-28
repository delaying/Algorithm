const fs=require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let count =0;
const result = [];

for(let i = 0; i<10;i++){
    result[i] = input[i]%42;
}
//Set을 사용하면 겹치는 숫자가 없도록 해줌!!!
const set = new Set(result);
const arrNum = [...set];
console.log(arrNum.length);

//Map과 Set을 사용하자!