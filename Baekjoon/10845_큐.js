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
const queue = [];
inputs.forEach((input) => {
  const [action, value] = input.split(" ");
  switch (action) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      answers.push(queue.shift() ?? -1);
      break;
    case "size":
      answers.push(queue.length);
      break;
    case "empty":
      answers.push(queue.length ? 0 : 1);
      break;
    case "front":
      answers.push(queue[0] ?? -1);
      break;
    case "back":
      answers.push(queue[queue.length - 1] ?? -1);
      break;
  }
});
console.log(answers.join("\n"));
