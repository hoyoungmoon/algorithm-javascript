const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const locations = input[1].split(" ").map(Number);

const getGCD = (n1, n2) => {
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  let r;
  while (min) {
    r = max % min;
    max = min;
    min = r;
  }
  return max;
};

const distances = locations.map((l) => Math.abs(l - S));

let ans = distances[0];
for (let i = 0; i < distances.length; i++) {
  ans = getGCD(ans, distances[i]);
}

console.log(ans);
