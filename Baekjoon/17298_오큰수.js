const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, arr] = input;
const numbers = arr.split(" ").map(Number);
const answer = Array(Number(N)).fill(-1);
const stack = [];

for (let i = 0; i < Number(N); i++) {
  // stack의 맨 위에 쌓인 인덱스의 numbers를 비교해보았을때 numbers[i] 보다 작다면 stack에 있는 나머지 인덱스들은 당연히 numbers[i]보다 작다는걸 생각못했다.
  while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
    answer[stack.pop()] = numbers[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
