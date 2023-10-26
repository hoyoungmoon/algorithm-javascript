const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [MIN, MAX] = input.split(" ").map(Number);

/**
 * 에라토스테네스의 체
 * 자기자신을 제외한 자기의 배수를 지워나간다
 */
const deletedNumbers = new Set();
Array.from({ length: MAX }, (_, i) => i + 1).forEach((n) => {
  if (n !== 1 && !deletedNumbers.has(n)) {
    let iter = 2;
    while (iter * n <= MAX) {
      deletedNumbers.add(iter * n);
      iter++;
    }
  }
});
const primeNumbers = Array.from({ length: MAX }, (_, i) => i + 1).filter(
  (n) => !deletedNumbers.has(n) && n !== 1 && n >= MIN
);

console.log(primeNumbers.join("\n"));
