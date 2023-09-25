const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const answers = [];
input
  .filter((v) => !!v)
  .forEach((v) => {
    const lower = v.match(/[a-z]/g);
    const upper = v.match(/[A-Z]/g);
    const number = v.match(/[0-9]/g);
    const space = v.match(/[\s]/g);

    answers.push([
      lower ? lower.length : 0,
      upper ? upper.length : 0,
      number ? number.length : 0,
      space ? space.length : 0,
    ]);
  });

console.log(
  answers
    .map((answer) => {
      return answer.join(" ");
    })
    .join("\n")
);
