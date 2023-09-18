const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let ans = 0;
const stack = [];
let prev = null;
input.split("").forEach((v) => {
  if (v === "(") {
    stack.push("(");
  } else {
    stack.pop();
    if (prev === "(") {
      // 미사일
      ans += stack.length;
    } else {
      ans++;
    }
  }
  prev = v;
});

console.log(ans);
