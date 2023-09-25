const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const positions = new Array(90 - 65 + 1).fill(-1);
input.split("").forEach((v, i) => {
  if (positions[v.charCodeAt() - "a".charCodeAt()] === -1) {
    positions[v.charCodeAt() - "a".charCodeAt()] = i;
  }
});
console.log(positions.join(" "));
