const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [n1, n2] = input.split(" ").map(Number);
// Greatest Common Division (유클리드 호제법)
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
// Lowest Common Multiple
const getLCM = (n1, n2) => {
  let gcd = getGCD(n1, n2);
  let iter = 1;
  let result = gcd * iter;
  while ((gcd * iter) % n1 !== 0 || (gcd * iter) % n2 !== 0) {
    iter++;
    result = gcd * iter;
  }
  return result;
};

console.log(getGCD(n1, n2), getLCM(n1, n2));
