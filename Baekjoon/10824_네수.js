const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [n1, n2, n3, n4] = input.split(" ");
console.log(Number(n1.concat(n2)) + Number(n3.concat(n4)));
