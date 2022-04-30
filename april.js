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

// //9012
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const caseCount = Number(input[0]);

// for (let i = 1; i <= caseCount; i += 1) {
//   const cases = input[i];
//   const stack =  [];
//   let result = 'YES';

//   for (let j = 0; j < cases.length; j += 1) {
//     if (cases[j] === '(') {
//       stack.push(1);
//     } else {
//       if (!stack.pop()) {
//         result = 'NO';
//         break;
//       } 
//     }
//   }

//   if (stack.length !== 0) {
//     result = 'NO';
//   }

//   console.log(result);
// }


// //5086
// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// input.pop();
// const nums = input.map(v => v.split(' ').map(x => +x))

// nums.forEach(v => {
//   if (v[1] % v[0] == 0) {
//     console.log('factor')
//   } else if (v[0] % v[1] == 0) {
//     console.log('multiple')
//   } else {
//     console.log('neither')
//   }
// })

//11050
const fs = require('fs');
const [N, K] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(v => +v);

let n = 1;
let r = 1;
let n_r = 1;

for (let i = N-K+1; i <= N; i++) {
  n *= i;
}

for (let i = 1; i <= K; i++) {
  r *= i
}


console.log(n / r);


// //2108
// const [n, ...num] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((e) => Number(e));
// // Array.from(new Set(num));


// //산술평균
// let result = num.reduce(function add(sum, currValue){
//     return sum +currValue;
// },0);

// console.log(Math.round(result/n));

// //중앙값
// const arr = num.sort();
// console.log(arr[Math.round(arr.length/2)-1]);

// //최빈값



// //범위
// if(arr[n-1]<=0){
//     arr[n-1]=arr[n-1]*(-1);
//     console.log(arr[n-1]+arr[0]);
// }else{
//     console.log(arr[n-1]-(arr[0]));
// }
