const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const map = {};

r1.on("line", function (line) {
  if (!line) r1.close();
  const words = line.split(" ");
  for (let word of words) map[word] = (map[word] || 0) + 1;
});

r1.on("close", function () {
  const arr = Object.keys(map);
  arr.sort();
  for (let k of arr) {
    console.log(`${k} ${map[k]}`);
  }
});
