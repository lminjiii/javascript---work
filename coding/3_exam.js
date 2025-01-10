let fs = require('fs');

let input = fs.readFileSync('./data/3_exam.txt')
          .toString().split('\n');
input = input[0].split(' ').map(Number);
console.log(input);

let result;

if(a >= 90) {
  result = "A";
}else if (a >= 80) {
  result = "B";
}else if (a >= 70) {
  result = "C";
}else if (a >= 60) {
  result = "D";
}else {
  result = "E";
}

console.log(result);


//const a = Number(input[0]);

//if(a > 89) {
//  console.log("A");
//}else if (a > 79) {
//  console.log("B");
//}else if (a > 69) {
//  console.log("C");
//}else if (a > 59) {
//  console.log("D");
//}else {
//  console.log("F");
//}