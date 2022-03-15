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