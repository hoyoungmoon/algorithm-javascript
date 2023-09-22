const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, str, ...num] = input;
const alphabet = {};
num.forEach((v, i) => {
  alphabet[String.fromCharCode(65 + i)] = Number(v);
});

console.log(str.match(/[A-Z]+|[^A-Z]+/g), alphabet);
