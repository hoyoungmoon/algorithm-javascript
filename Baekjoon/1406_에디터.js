const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [word, N, ...inputs] = input;

// 스택 2개 사이에 커서가 있다고 생각하자
const lStack = word.split("");
const rStack = [];

inputs.forEach((input) => {
  const [action, value] = input.split(" ");
  switch (action) {
    case "L":
      if (lStack.length) {
        rStack.push(lStack.pop());
      }
      break;
    case "D":
      if (rStack.length) {
        lStack.push(rStack.pop());
      }
      break;
    case "P":
      lStack.push(value);
      break;
    case "B":
      lStack.pop();
      break;
  }
});
console.log(lStack.join("") + rStack.reverse().join(""));
/*
시간초과 풀이법
let cursor = word.length;
let answer = word;
inputs.forEach((input) => {
  const [action, value] = input.split(" ");
  switch (action) {
    case "L":
      cursor = Math.max(0, cursor - 1);
      break;
    case "D":
      cursor = Math.min(answer.length, cursor + 1);
      break;
    case "P":
      answer = answer.slice(0, cursor) + value + answer.slice(cursor);
      cursor = Math.min(answer.length, cursor + 1);
      break;
    case "B":
      answer = answer.slice(0, Math.max(0, cursor - 1)) + answer.slice(cursor);
      cursor = Math.max(0, cursor - 1);
      break;
  }
});
console.log(answer);
*/
