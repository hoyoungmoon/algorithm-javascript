const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

console.log(
  input
    .match(/<[a-z ]+>|[a-z0-9 ]+/g)
    .map((str) => {
      if (str.startsWith("<")) {
        return str;
      } else {
        return str
          .split(" ")
          .map((v) => v.split("").reverse().join(""))
          .join(" ");
      }
    })
    .join("")
);
