// //input 코드
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on("line", function(line) {
//   console.log("hello !", line);
//   rl.close();
// }).on("close", function() {
//   process.exit();
// });


// //내부슬롯 테스트
// const x =1;

// function foo() {
//   const x = 10;

//   bar();
// }

// function bar() {
//   console.log(x);
// }

// foo(); //1 출력
// bar(); //1 출력

function solution(N) {
  const memo = new Array();
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= N; i++) {
    memo[i] = (memo[i - 2] + memo[i - 1]) % 15746;
  }
  console.log(memo[N]);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  solution(Number(input));
  rl.close();
}).on("close", function () {
  process.exit();
});