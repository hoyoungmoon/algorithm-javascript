const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

// 사칙연산의 순서가 stack에 쌓이도록 하자
// 사칙연산 우선순위에 따라 (), +-, */에 따라 다르게 처리하자
const stack = [];
let ans = "";
input.split("").forEach((v) => {
  if (v === "(") {
    stack.push(v);
  } else if (v === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      ans += stack.pop();
    }
    stack.pop();
  } else if (["*", "/"].includes(v)) {
    while (stack.length && ["*", "/"].includes(stack[stack.length - 1])) {
      ans += stack.pop();
    }
    stack.push(v);
  } else if (["+", "-"].includes(v)) {
    while (stack.length && stack[stack.length - 1] !== "(") {
      ans += stack.pop();
    }
    stack.push(v);
  } else {
    ans += v;
  }
});
while (stack.length) {
  ans += stack.pop();
}
console.log(ans);
