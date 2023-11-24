const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const N = Number(input);

console.log(parseInt(N / 5) + parseInt(N / 25) + parseInt(N / 125));
