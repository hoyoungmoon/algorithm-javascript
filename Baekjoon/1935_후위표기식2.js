const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, str, ...num] = input;
const alphabet = {};
num.forEach((v, i) => {
  alphabet[String.fromCharCode(65 + i)] = Number(v);
});
const stack = [];
const operations = ["-", "+", "*", "/"];

str
  .split("")
  .map((v) => (operations.includes(v) ? v : alphabet[v]))
  .forEach((v, i) => {
    let pushValue = v;
    if (operations.includes(v)) {
      const secondValue = stack.pop();
      const firstValue = stack.pop();
      switch (v) {
        case "+":
          pushValue = firstValue + secondValue;
          break;
        case "-":
          pushValue = firstValue - secondValue;
          break;
        case "*":
          pushValue = firstValue * secondValue;
          break;
        case "/":
          pushValue = firstValue / secondValue;
          break;
      }
    }
    stack.push(pushValue);
  });

console.log((Math.floor(stack[0] * 100) / 100).toFixed(2));
