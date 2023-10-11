const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [a, b, c] = input.split(" ").map(Number);
console.log(
  [
    (a + b) % c,
    ((a % c) + (b % c)) % c,
    (a * b) % c,
    ((a % c) * (b % c)) % c,
  ].join("\n")
);
