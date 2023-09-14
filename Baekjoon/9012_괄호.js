const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [N, ...inputs] = input;
const answers = [];
inputs.forEach((input) => {
  const arr = input.split("");
  const stack = [];
  let result = true;
  arr.forEach((s) => {
    if (s === "(") {
      stack.push("(");
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        result = false;
      }
    }
  });
  if (result) {
    result = stack.length ? false : true;
  }
  answers.push(result ? "YES" : "NO");
});
console.log(answers.join("\n"));
