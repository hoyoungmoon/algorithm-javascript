const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [N, ...inputs] = input;

const answer = [];
const deque = [];
inputs.forEach((input) => {
  const [action, value] = input.split(" ");
  switch (action) {
    case "push_front":
      deque.push(value);
      break;
    case "push_back":
      deque.unshift(value);
      break;
    case "pop_front":
      if (!deque.length) {
        answer.push(-1);
        return;
      }
      answer.push(deque.pop());
      break;
    case "pop_back":
      if (!deque.length) {
        answer.push(-1);
        return;
      }
      answer.push(deque.shift());
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque.length ? 0 : 1);
      break;
    case "front":
      answer.push(deque.length ? deque[deque.length - 1] : "-1");
      break;
    case "back":
      answer.push(deque.length ? deque[0] : "-1");
      break;
  }
});

console.log(answer.join("\n"));
