import fs from "fs";

const dataset = fs.readFileSync("./input.txt", "utf-8").trim().split(`\r\n`);

function partOne(input) {
   const maxCount = {
      red: 12,
      green: 13,
      blue: 14,
   };

   const output = input
      .map((value) => {
         return value
            .split(": ")[1]
            .split("; ")
            .map((set) => {
               const pulls = set.split(", ");
               return pulls.every((pull) => {
                  const [count, color] = pull.split(" ");
                  return maxCount[color] >= parseInt(count);
               });
            })
            .every((play) => Boolean(play));
      })
      .reduce((sum, result, idx) => {
         return result ? sum + (idx + 1) : sum;
      }, 0);
   return output;
}

console.log(partOne(dataset));

function partTwo(input) {
   return input
      .map((value) => {
         const maxCount = {
            red: 0,
            green: 0,
            blue: 0,
         };
         value
            .split(": ")[1]
            .split("; ")
            .forEach((set) => {
               const pulls = set.split(", ");
               return pulls.forEach((pull) => {
                  const [count, color] = pull.split(" ");
                  if (maxCount[color] <= parseInt(count)) {
                     maxCount[color] = parseInt(count);
                  }
               });
            });
         return maxCount.red * maxCount.green * maxCount.blue;
      })
      .reduce((total, curr) => total + curr);
}

console.log(partTwo(dataset));
