const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

console.log(
  input
    .split("")
    .map((s, i) => {
      return input.slice(i);
    })
    .sort()
    .join("\n")
);
