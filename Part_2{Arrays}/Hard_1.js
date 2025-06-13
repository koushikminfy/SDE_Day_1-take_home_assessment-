// i am taking data array from MEdium_2 file
const scores = require('./Medium_2.js');

const total = scores.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const average = total / scores.length;

console.log("Total Score:", total);
console.log("Average Score:", average);
