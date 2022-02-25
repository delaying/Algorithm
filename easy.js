// // // // 10869번
// while(true){
//     const fs = require('fs');
//     const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    
//     const A = Number(input[0]);
//     const B = Number(input[1]);
//     if(1<=A && B<=10000){
//         console.log(A+B);
//         console.log(A-B);
//         console.log(A*B);
//         console.log(Math.floor(A/B));
//         console.log(A%B);
//         break;
//     }
// }



// // 10171
// console.log(`\\    /\\
//  )  ( ')
// (  /  )
//  \\(__)|`);

 

// //  10172
// console.log(`|\\_/|
// |q p|   /}
// ( 0 )"""\\
// |"^"\`    |
// ||_/=\\\\__|`);


// // 10926
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// console.log(`${input}??!`);


// //2741
// const fs = require('fs');
// const input = Number(fs.readFileSync('/dev/stdin').toString());

// const n = input;
// let answer = '';

// for(let i=1; i<=n; i++){
//     answer += i + "\n";
// }

// console.log(answer);

// //18108
// const input = require('fs').readFileSync('/dev/stdin').toString();

// console.log(input-543);



// //10430
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// let A = Number(input[0]);
// let B = Number(input[1]);
// let C = Number(input[2]);

// console.log((A+B)%C);
// console.log(((A%C) + (B%C))%C);
// console.log((A*B)%C);
// console.log(((A%C) * (B%C))%C);


// //1330
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// const A = Number(input[0]);
// const B = Number(input[1]);

// if(A < B){
//     console.log('<');
// }else if(A > B){
//     console.log('>');
// }else{
//     console.log('==');
// }



// //9498
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// const score = Number(input);

// if(score >= 90){
//     console.log('A');
// }else if(score >=80 && score <=89){
//     console.log('B');
// }else if(score >=70 && score <=79){
//     console.log('C');
// }else if(score >= 60 && score <=69){
//     console.log('D');
// }else{
//     console.log('F');
// }

// //2753
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// const y = Number(input);

// if( (y % 4 == 0) && ( y % 100 != 0)){
//     console.log(1);
// }else if(y % 400 == 0 && y % 4 == 0){
//     console.log(1);
// }else{
//     console.log(0);
// }

// // //10950
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

// for(let i =1; i<=input[0]; i++){
//     let res = input[i].split(' ');

//     console.log(Number(res[0]) + Number(res[1]));
// }

// //14681
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// let input = [];
// rl.on('line', function(line){
//     input.push(parseInt(line));
// }).on('close',function(){
//     const x = input[0];
//     const y = input[1];

//     if(x>0 && y>0){
//         console.log("1");
//     }else if(x>0 && y<0){
//         console.log("4");
//     }else if(x<0 && y>0){
//         console.log("2");
//     }else{
//         console.log("3");
//     }

//     process.exit();
// })

// //2739
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// let input = [];
// rl.on('line', function(line){
//     input.push(parseInt(line));
// }).on('close',function(){
//     const n = input[0];

//     for(let i=1; i<=9; i++){
//         console.log(`${n} * ${i} = ${n*i}`);
//     }

//     process.exit();
// })

// //8393
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// let input = [];
// rl.on('line', function(line){
//     input.push(parseInt(line));
// }).on('close',function(){
//     const n = input[0];
//     let result = 0;

//     for(let i=1; i<=n; i++){
//         result += i;
//     }
//     console.log(result);

//     process.exit();
// })


// //2742
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// let input = [];
// rl.on('line', function(line){
//     input.push(parseInt(line));
// }).on('close',function(){

//     for(let i=input[0]; i>=1; i--){
//         console.log(i);
//     }

//     process.exit();
// })


// //11022
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');


// for(let i =1; i<=input[0]; i++){
//     let arr = input[i].split(' ');
//     let result = Number(arr[0]) + Number(arr[1]);
//     console.log(`Case #${i}: ${result}`);
// }

// //15552 
// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");

// let answer = ''

// for(let i = 1; i <= input[0]; i++) {
//     tmp = input[i].split(' ')
//     answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"
// }

// console.log(answer)

// //2438
// const fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString();

// for(let i = 1; i<=input; i++){
//     if(i>1){
//         for(let j=1; j<i;j++){
//             process.stdout.write("*");
//         }
//     }
//     console.log("*");
// }

// //2439
// const fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString();

// for(let i = input; i>=1; i--){
//     for(let j=1; j<i;j++){
//         process.stdout.write(" ");
//     }
//     if(i<=input){
//         for(let j=i; j<=input; j++){
//             process.stdout.write("*");
//         }
//     }
//     console.log();
// }

// //10871
// const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const n = input[0].split(' ');
// const arr = input[1].split(' ');
// let result = '';

// for(let i=0; i<Number(n[0]); i++){
//     if(Number(arr[i])<Number(n[1])){
//         result += Number(arr[i])+ ' ';
//     }
// }
// process.stdout.write(result);

