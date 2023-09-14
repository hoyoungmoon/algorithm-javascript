const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [N, ...numberArr] = input;

const numbers = Array.from({ length: N }, (_, i) => i + 1);
const stack = [];
const actions = [];
let isPossible = true;
for (let i = 0; i < numberArr.length; i++) {
  const n = numberArr[i];
  if (numbers[0] <= n) {
    while (numbers[0] && numbers[0] <= n) {
      stack.push(numbers.shift());
      actions.push("+");
    }
    stack.pop();
    actions.push("-");
  } else {
    if (stack.pop() == n) {
      actions.push("-");
    } else {
      isPossible = false;
      break;
    }
  }
}
console.log(isPossible ? actions.join("\n") : "NO");
