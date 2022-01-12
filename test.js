//input 코드
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  console.log("hello !", line);
  rl.close();
}).on("close", function() {
  process.exit();
});


//내부슬롯 테스트
const x =1;

function foo() {
  const x = 10;

  bar();
}

function bar() {
  console.log(x);
}

foo(); //1 출력
bar(); //1 출력

