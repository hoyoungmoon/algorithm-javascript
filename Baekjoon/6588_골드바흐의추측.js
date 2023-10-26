const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const numbers = input.map(Number);
const MAX = 1000000;

const primeNumbers = Array(MAX + 1).fill(true);
primeNumbers[0] = false;
primeNumbers[1] = false;
// 에라토스테네스의 체
for (let i = 2; i <= Math.sqrt(MAX); i++) {
  if (!primeNumbers[i]) continue;
  for (let j = i * 2; j <= MAX; j += i) {
    primeNumbers[j] = false;
  }
}
const arr = primeNumbers
  .map((isPrime, i) => (isPrime ? i : null))
  .filter((v) => v !== null);

const answer = [];
numbers.forEach((v) => {
  for (let i = 0; i < arr.length; i++) {
    if (primeNumbers[v - arr[i]]) {
      answer.push({ v, a: arr[i], b: v - arr[i] });
      break;
    }
  }
});
console.log(answer.map(({ a, b, v }) => `${v} = ${a} + ${b}`).join("\n"));
