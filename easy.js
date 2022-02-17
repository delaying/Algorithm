// // // 10869번
while(true){
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    
    const A = Number(input[0]);
    const B = Number(input[1]);
    if(1<=A && B<=10000){
        console.log(A+B);
        console.log(A-B);
        console.log(A*B);
        console.log(Math.floor(A/B));
        console.log(A%B);
        break;
    }
}



// 10171
console.log(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`);

 

//  10172
console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);


// 10926
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(`${input}??!`);
