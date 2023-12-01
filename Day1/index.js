import fs from "fs";

const example1 = fs.readFileSync("./example.txt").toString();
const dataset1 = fs.readFileSync("./input.txt").toString();

function part1(input) {
  let total = 0;
  for (let line of input.split(`\n`)) {
    // for each line filter out all the numbers
    let numbers = line.split("").filter((el) => !isNaN(parseInt(el)));
    // combine the first and last numbers
    let combinedNumbers = parseInt(
      `${numbers[0]}${numbers[numbers.length - 1]}`
    );
    total = total + parseInt(combinedNumbers);
  }
  return total;
}

console.log(part1(example1));
console.log(part1(dataset1));

const example2 = fs.readFileSync("./example2.txt").toString();
const dataset2 = fs.readFileSync("./input2.txt").toString();

function part2(input) {
  let total = 0;

  const letterToNumberMap = {
    one: "one1one",
    two: "two2two",
    three: "three3three",
    four: "four4four",
    five: "five5five",
    six: "six6six",
    seven: "seven7seven",
    eight: "eight8eight",
    nine: "nine9nine",
  };

  for (let line of input.split(`\n`)) {
    for (let num of Object.keys(letterToNumberMap)) {
      line = line.replaceAll(num, letterToNumberMap[num]);
    }

    let numbers = line.split("").filter((el) => !isNaN(parseInt(el)));

    let combinedNumbers = parseInt(
      `${numbers[0]}${numbers[numbers.length - 1]}`
    );
    total = total + parseInt(combinedNumbers);
  }
  return total;
}

console.log(part2(example2));
console.log(part2(dataset2));
