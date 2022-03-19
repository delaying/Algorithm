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
