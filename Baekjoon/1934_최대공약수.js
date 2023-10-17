const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, ...inputs] = input;

const getGCD = (n1, n2) => {
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  let tmp;

  while (min) {
    tmp = min;
    min = max % min;
    max = tmp;
  }
  return max;
};

const getLCM = (n1, n2) => {
  const gcd = getGCD(n1, n2);
  return gcd * (n1 / gcd) * (n2 / gcd);
};

console.log(
  inputs
    .map((v) => {
      const [n1, n2] = v.split(" ");
      return getLCM(n1, n2);
    })
    .join("\n")
);
