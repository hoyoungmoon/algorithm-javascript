const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [_, inputs] = input;
const numbers = inputs.split(" ").map(Number);
const N = numbers.length;
const counts = {};
const stack = [];
const answer = Array(N).fill(-1);

numbers.forEach((number) => {
  counts[number] = (counts[number] || 0) + 1;
});
for (let i = 0; i < N; i++) {
  while (
    stack.length &&
    counts[numbers[i]] > counts[numbers[stack[stack.length - 1]]]
  ) {
    answer[stack.pop()] = numbers[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
