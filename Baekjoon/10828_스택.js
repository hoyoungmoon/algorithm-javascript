const fs = require("fs");
const [N, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];
const outputs = [];
const printAction = (action, value) => {
  switch (action) {
    case "push":
      stack.push(value);
      break;
    case "top":
      outputs.push(stack.length ? stack[stack.length - 1] : -1);
      break;
    case "size":
      outputs.push(stack.length);
      break;
    case "pop":
      outputs.push(stack.pop() || -1);
      break;
    case "empty":
      outputs.push(stack.length ? 0 : 1);
      break;
  }
};

inputs.forEach((v) => {
  const [action, value] = v.split(" ");
  printAction(action, value);
});

console.log(outputs.join("\n"));
