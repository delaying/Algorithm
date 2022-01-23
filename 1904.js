const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line;
  solution(Number(input));
  rl.close();
}).on("close", function () {
  process.exit();
});


let arr=[];

function solution(input){
    for(let i=0; i<=input; i++){
        if(i<3){
            arr[i]=i;
        }else{
            arr[i] = (arr[i-1]+arr[i-2]) % 15746;
        }
    }
    
    console.log(arr[input]);
}

