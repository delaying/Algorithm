const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString();

if(Number(input) < 10){
    input += 0;
}

const x = Number(input);
let ten = Math.floor(x/10);
let one = Math.floor(x%10);
let count = 0;
let result = 0;

while(true){
    result = ten + one;
    if(result < 10){
            ten = one;
            one = result
            count +=1;
    }else{
        ten = one;
        one = Math.floor(result%10);
        count +=1;
    }

    if(x == ((ten*10)+one)){
        console.log(count);
        break;
    }
}