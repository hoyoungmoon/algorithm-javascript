const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [n1, n2] = input.split(" ").map(Number);

const combination = (n, r) => {
  if (r === 1) return n;
  if (n - r === 1) return n;
  return combination(n - 1, r) + combination(n - 1, r - 1);
};

const getNumberOfFive = (n) => {
  let divider = 5;
  let result = 0;
  while (divider <= n) {
    result += parseInt(n / divider);
    divider *= 5;
  }
  return result;
};
const getNumberOfTwo = (n) => {
  let divider = 2;
  let result = 0;
  while (divider <= n) {
    result += parseInt(n / divider);
    divider *= 2;
  }
  return result;
};

console.log(
  Math.min(
    getNumberOfFive(n1) - getNumberOfFive(n2) - getNumberOfFive(n1 - n2),
    getNumberOfTwo(n1) - getNumberOfTwo(n2) - getNumberOfTwo(n1 - n2)
  )
);
