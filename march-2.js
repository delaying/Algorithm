//10872
// //재귀 이용
// const fs=require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// let sum = 1;

// function factorial(n){
//     if(n==0){
//         return sum;
//     }
//     sum *=n;
//     if(n>1){
//         factorial(n-1);
//         return sum;
//     }
    
// }

// factorial(input);
// console.log(sum);

// //for 문 이용
// const fs=require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// let sum = 0;

// function factorial(n){
//     if(sum===0){
//         sum = n;
//     }else{
//         sum *=n;
//     }
//     return sum;
// }

// for(let i=0;i<=input;i++){
//     if(input==0){
//         console.log(1);
//         break;
//     }
//     factorial(i);
// }

// if(sum !==0){
//     console.log(sum);
// }


// 10870
//for문 이용
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// let sum = [];
// sum[0]=0;
// sum[1]=1;

// function fibonachi(n){
//     for(let i=2; i<=n; i++){
//         sum[i]= sum[i-1]+sum[i-2];
//     }
    
//     console.log(sum[n]);
//     return;
    
// }
// fibonachi(Number(input));

// //재귀이용
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// let sum = [];
// sum[input]=0;
// sum[input-1]=1;

// function fibonachi(n){
//     if(n==0){
//         console.log(sum[0]);
//         return;
//     }else{
//         sum[n-2]= sum[n-1]+sum[n];
//         fibonachi(n-1);
//         return;
//     }
    
// }

// fibonachi(Number(input));

//2798
// let fs = require('fs');
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// input[0] = input[0].split(" ");
// const cards = input[1].split(" ").map((element) => Number(element));
// const N = Number(input[0][0]); // N은 총 카드의 개수
// const M = Number(input[0][1]); // M은 3개의 숫자의 합과 가장 가까운 목표 값
// let answer = 0;

// for(let i = 0; i < N; i++){
//    for(let j = i+1; j < N; j++){
//       for(let k = j+1; k < N; k++){
//          const sum = cards[i] + cards[j] + cards[k];
//          const gap = M - sum;
//          if(gap >= 0 && answer <= sum){
//             answer = sum;
//          }
//       }
//    }
// }
// console.log(answer);

// //2941
// const fs = require("fs");
// const input = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `c=c=`
// )
//   .trim()
//   .split("");

// let croatiaWordCount = 0;

// for (let i = 0; i < input.length; i++) {
//   let nowWord = input[i];
//   let rightWord = input[i + 1];
//   let liftWord = input[i - 1];
//   let rrWord = input[i + 2];

//   if (nowWord === "c") {
//     if (rightWord === "=" || rightWord === "-") {
//       croatiaWordCount--;
//     }
//   }

//   if (nowWord === "d") {
//     if (rightWord === "-") {
//       croatiaWordCount--;
//     }
//     if (rightWord === "z" && rrWord === "=") {
//       croatiaWordCount -= 2;
//     }
//   }

//   if (nowWord === "l" || nowWord === "n") {
//     if (rightWord === "j") {
//       croatiaWordCount--;
//     }
//   }

//   if (nowWord === "s") {
//     if (rightWord === "=") {
//       croatiaWordCount--;
//     }
//   }

//   if (nowWord === "z") {
//     if (liftWord !== "d" && rightWord === "=") {
//       croatiaWordCount--;
//     }
//   }

//   croatiaWordCount++;
// }

// console.log(croatiaWordCount);

// //1316
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let result = 0;

// for (let i = 1; i <= input[0]; i++) {
// 	let obj = {};
// 	let torf = true;
// 	for (let j = 0; j < input[i].length; j++) {
// 		if (!obj[input[i][j]]) {
// 			obj[input[i][j]] = 1;
// 		} else {
// 			if (input[i][j] === input[i][j - 1]) obj[input[i][j]]++;
// 			else {
// 				torf = false;
// 				break;
// 			}
// 		}
// 	}
// 	if (torf) result++;
// }

// console.log(result);


// //2231
// const num = parseInt(require("fs").readFileSync("/dev/stdin").toString());
// let start = num - (num+"").length*9;
// let answer = 0;
// if (start < 0) {
//     start = 0;
// }

// for (let i=start; i<num; i++) {
//     if (i.toString().split("")
//         .map(n => parseInt(n))
//         .reduce((acc, n) => acc + n, 0) + i === num) {

//         answer = i;
//         break;
//     }
// }

// console.log(answer);

// //7568
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin")
// 	.toString()
// 	.trim()
// 	.split("\n")
// 	.map((el) => el.split(" ").map((el) => Number(el)));
// let arr = input.slice(1, input.length);
// let result = [];

// for (let i = 0; i < arr.length; i++) {
// 	let grade = 1;
// 	for (let j = 0; j < arr.length; j++) {
// 		if (i !== j) {
// 			if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) grade++;
// 		}
// 	}
// 	result.push(grade);
// }

// console.log(result.join(" "));

// //1712
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim()
//     .split(' ').map((el)=> Number(el));

// let bep = 0;

// const A = input[0];
// const B = input[1];
// const C = input[2];

// if(B>=C){
//     console.log(-1);
    
// }else{
//     bep = A/(C-B);
//     console.log(Math.floor(bep)+1);
// }


////1018
// const [n, m, ...board] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// const lines = ["WBWBWBWB", "BWBWBWBW"]
// let min = 64;
// for (let i=0; i<=n-8; i++) {
//     for (let j=0; j<=m-8; j++) {
//         for (let oe=0; oe<2; oe++) {
//             let count = 0;
//             for (let x=i; x<i+8; x++) {
//                 for (let y=j; y<j+8; y++) {
//                     if (board[x][y] !== lines[(x+oe)%2][y-j]) {
//                         count++;
//                     }
//                 }
//             }
//             if (min > count) min = count;
//         }
//     }
// }
// console.log(min);


// //1436
// const n = +require("fs").readFileSync("/dev/stdin").toString()
// let num = 666;
// let count = 1;
// while (count !== n) {
//     num++;
//     if (String(num).includes("666")) count++;
// }
// console.log(num);


//2750
// const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


// input.shift();

// input.sort((a, b) => a - b);

// for (let i = 0; i < input.length; i++) {
//   console.log(input[i]);
// }


//2751
let input = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [N, ...numList] = input.map((e) => Number(e));
    const result = numList.sort((a, b) => a - b);
    console.log(result.join('\n'));
  });


// for (let i=start; i<num; i++) {
//     if (i.toString().split("")
//         .map(n => parseInt(n))
//         .reduce((acc, n) => acc + n, 0) + i === num) {

//         answer = i;
//         break;
//     }
// }