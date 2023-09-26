const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString();

const numOfAlphabet = "z".charCodeAt() - "a".charCodeAt() + 1;
console.log(
  input
    .split("")
    .map((v) => {
      if (!!v.match(/[a-z]/)) {
        const offset = (v.charCodeAt() - "a".charCodeAt() + 13) % numOfAlphabet;
        return String.fromCharCode("a".charCodeAt() + offset);
      } else if (!!v.match(/[A-Z]/)) {
        const offset = (v.charCodeAt() - "A".charCodeAt() + 13) % numOfAlphabet;
        return String.fromCharCode("A".charCodeAt() + offset);
      } else if (!!v.match(/[\s]/)) {
        return " ";
      }
      return v;
    })
    .join("")
);
