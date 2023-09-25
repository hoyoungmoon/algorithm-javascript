const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const counts = new Array(90 - 65 + 1).fill(0);
input.split("").forEach((v) => {
  counts[v.charCodeAt() - "a".charCodeAt()]++;
});
console.log(counts.join(" "));
