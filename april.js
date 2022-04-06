//11651
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim()); 
// const N = +input.shift();
// const location = input.map(v=>v.split(' ').map(x=>+x));
// const answer = location.sort((a,b)=>{
//   if(a[1]>b[1]){
//     return 1;
//   }else if(a[1]<b[1]){
//     return -1;
//   }else{
//     return a[0]-b[0];
//   }
// });
// console.log(answer.map(v=>v.join(' ')).join('\n'));

// //1181
// const [n, ...words] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// Array.from(new Set(words))
//     .sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
//     .sort((a, b) => a.length - b.length)
//     .forEach(i => console.log(i));

// //10814

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

// const len = input.shift();

// input.sort((a, b) => parseFloat(a) - parseFloat(b));

// console.log(input.join("\n"));



// //2108
// const [n, ...num] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((e) => Number(e));
// // Array.from(new Set(num));


// //산술평균
// let result = num.reduce(function add(sum, currValue){
//     return sum +currValue;
// },0);

// console.log(Math.round(result/5));