const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [N, ...cases] = input.split("\n");

const getGCD = (n1, n2) => {
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  let r;
  while (min) {
    r = max % min;
    max = min;
    min = r;
  }
  return max;
};

let answer = [];
cases.forEach((v) => {
  let sum = 0;
  const [N, ...values] = v.split(" ");
  const numbers = values.map(Number);
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum += getGCD(numbers[i], numbers[j]);
    }
  }
  answer.push(sum);
});

console.log(answer.join("\n"));
