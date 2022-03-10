// // 8958
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// for(let i =1; i<=input[0];i++){
//     let count = 0;
//     let sum = 0;

//     for(let j=0; j <input[i].length;j++){
//         if(input[i][j]==='O'){
//             count ++;
//         }else{
//             count =0;
//         }
//         sum +=count;
//     }
// console.log(sum);
        
// }

// // 4344
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const arr = [];

// for(let i=0; i<input[0];i++){
//     arr[i] = input[i+1].split(' ').map(x=> Number(x));
//     let sum = 0;
//     let count = 0;

//     for (let j=1; j<=arr[i][0];j++){
//         sum += arr[i][j];
//     }       
//      let result = sum/arr[i][0];

//      for (let j=1; j<=arr[i][0];j++){
//         if(arr[i][j]>result){
//             count ++;
//         }
//     } 
 
//     let n = count/arr[i][0]*100;

//     console.log(`${n.toFixed(3)}%`);
// }

// //11654
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// const res = input.charCodeAt();
// console.log(res);

// //11720
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let arr = input[1].split('');
// let res = 0;

// for(let i =0;i<input[0];i++){
//     res += Number(arr[i]);
// }
// console.log(res);


// //10809
// //내가 푼거.
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

// const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
// const res = [];


// for(let i=0; i<input.length-1;i++){

//     for(let j=0 ;j<arr.length;j++){
//         if(arr[j]==input[i] && (res[j]<0 || res[j]==null) ){
//             res[j] = i;
//         }else{
//             if(res[j]==null){
//                 res[j] = -1;
//         }
//     }
// }
//  }


// for(let j=0; j<arr.length;j++){
//     process.stdout.write(`${res[j]} `);
// }


// //2675
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// for (let i = 1; i < input.length; i++) {
// 	let arr = input[i].split(" ");
// 	let value = "";

// 	for (let j = 0; j < arr[1].length; j++) {
// 		value += arr[1][j].repeat(Number(arr[0]));
// 	}
// 	console.log(value);
// }

// //1152
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// if(input==''){
//     console.log("0");
// }else{
//     console.log(input.length);
// }

// //2908
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// const x = input[0].trim().split('');
// const y = input[1].trim().split('')

// let num1 = '';
// let num2 = '';

// for(let i=2; i>=0;i--){
//     num1 +=x[i];
//     num2 +=y[i];
// }

// if(Number(num1)>Number(num2)){
//     console.log(num1);
// }else{
//     console.log(num2);
// }

//5622
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// const str = input.split('');

// const arr = ['','','',['A','B','C'],['D','E','F'],['G','H','I'],['J','K','L'],['M','N','O'],['P','Q','R','S'],['T','U','V'],['W','X','Y','Z']]
// let result = 0;
// for (let i=3; i<=10; i++){
//     for(let j=0;j<=3;j++){
//         if(arr[i][j]===str[i-3]){
//             result += i;
//             console.log(result);
//         }
//     }
// }
// console.log('결과'+result);


// //1157
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase().split("");
// let alpha = input.filter((el, idx) => input.indexOf(el) === idx);
// let count = new Array(alpha.length).fill(0);

// for (let i = 0; i < input.length; i++) {
// 	count[alpha.indexOf(input[i])]++;
// }

// let max = count[0];

// for (let j = 1; j < count.length; j++) {
// 	if (max < count[j]) max = count[j];
// }

// if (count.filter((el) => el === max).length > 1) console.log("?");
// else {
// 	console.log(alpha[count.indexOf(max)].toUpperCase());
// }

// //2292
// const fs = require("fs");
// const input = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `1000000000`
// ).trim();

// let N = Number(input);

// let i = 1;
// let sum = 1;

// while (sum < N) {
//   sum += 6 * i;
//   i++;
// }

// console.log(i);

//1193
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// let number = Number(input);
// let value = 1;
// while (true) {
// 	number -= value;
// 	if (number <= 0) {
// 		number += value;
// 		break;
// 	}
// 	value++;
// }

// if (value % 2 === 1) {
// 	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
// } else {
// 	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
// }

// //4673

// function notSelfNum(n){ 
//     let sum = n;
    
//       while(n>0){ 
//           sum += n%10; 
//           n= Math.floor(n/10); 
//       }
//       return sum;
//   }
  
//   const selfNum = new Array(10000); 
//   selfNum.fill(true);
  
//   for(let i=1; i<=10000; i++){
//       selfNum[notSelfNum(i)] = false;
      
//       if(selfNum[i]){
//           console.log(i);
//       }
//   }


// //2869
// const { time } = require("console");
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

// const A = Number(input[0]);
// const B = Number(input[1]);
// const V = Number(input[2]);

 
// console.log(Math.ceil((V - B) / (A - B)));


// //2839
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();

// let sugar = Number(input);
// let count = 0;

// while(true){
//     if(sugar % 5 === 0){
//         console.log(sugar/5+count);
//         break;
//     }else if(sugar <= 0){
//         console.log(-1);
//         break;
//     }
//     sugar = sugar -3;
//     count ++;
// }


// //10757
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');


// console.log(Number(input[0])+Number(input[1]));


// //큰 수를 처리하기 위한 함수 BigInt,
// // 스트링으로 출력해주어야함.
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const A = BigInt(input[0]);
// const B = BigInt(input[1]);
// let answer = A + B;
// console.log(answer.toString());


// //1978
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let arr = [];
// let count = 0;

// function primeNumber(n){
//     if(n < 2){
//         return;
//     }

//     for(let i =2; i<n; i++){
//         if(n%i ===0){
//             return;
//         }
//     }
//     count ++;
// }

// for(let i =0; i<input[0];i++){
//     arr=input[1].split(' ');
//     primeNumber(arr[i]);
// }

// console.log(count);

// //2581
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let sum = 0;
// let min = input[1];

// function primeNumber(n){
//     if(n < 2){
//         return;
//     }
//     if(n == 2){
//         min = 2;
//     }

//     for(let i =2; i<n; i++){
//         if(n%i ===0){
//             return;
//         }
        
//     }
//     sum =sum + n;
    
//     if(min > n){
//         min = n;
//     }
// }

// for(let i = Number(input[0]); i<=Number(input[1]);i++){
//     primeNumber(i);
// }

// if(sum ==0){
//     console.log(-1);
// }else{
//     console.log(sum);
//     console.log(min);   
// }
