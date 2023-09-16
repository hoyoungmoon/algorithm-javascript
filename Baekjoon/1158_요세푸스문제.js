const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();
const [N, K] = input.split(" ");
const circle = Array.from({ length: N }, (_, i) => i + 1);
const answer = [];

while (circle.length) {
  for (let i = 0; i < K; i++) {
    if (i === K - 1) {
      answer.push(circle.shift());
    } else {
      circle.push(circle.shift());
    }
  }
}

console.log(`<${answer.join(", ")}>`);
