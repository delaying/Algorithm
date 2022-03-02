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











// // 4673
// let arr = [];
// for(let i =0; i<10000;i++){
//     arr[i] =false;
// }

// 1065