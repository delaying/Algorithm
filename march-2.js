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