const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [_, inputs] = input;
const numbers = inputs.split(" ").map(Number);
const N = numbers.length;
const counts = Array(N + 1).fill(0);
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  counts[numbers[i]] += 1;
  while (
    stack.length &&
    counts[numbers[i]] < counts[numbers[stack[stack.length - 1]]]
  ) {
    answer.push(numbers[stack.pop()]);
  }
  stack.push(i);
}

console.log(answer, stack);
