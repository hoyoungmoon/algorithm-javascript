const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [N, ...sentences] = input;
const result = [];
sentences.forEach((sentence) => {
  const tmp = [];
  sentence.split(" ").forEach((word) => {
    tmp.push(word.split("").reverse().join(""));
  });
  result.push(tmp.join(" "));
});
console.log(result.join("\n"));
