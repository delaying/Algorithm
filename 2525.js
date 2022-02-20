const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let [a,b] = input[0].split(' ');
let h = Number(a);
let m = Number(b);
let time = Number(input[1]);
let rh = h;
let rm = m + time;
let c = Math.floor(rm/60);
let d = rm%60;

if(c>=1){
        rh = rh + c;
        rm = d;
        if(rm>=60){
            rm = rm - 60;
            rh = rh + 1;
        }
        if(rh >=24){
            rh = rh-24;
        }
        console.log(rh, rm);
    }else{
        console.log(rh, rm);
    }

