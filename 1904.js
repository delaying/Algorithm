//n값만 입력받으면 끝!!
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = Number(input[0]);


let arr=[];


for(let i=0; i>=input; i++){
    if(i<3){
        arr[i]=i;
    }else{
        arr[i] = arr[i-1]+arr[i-2];
    }
}

console.log(arr[input]);