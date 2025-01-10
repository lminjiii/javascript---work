let fs = require('fs');

let input = fs.readFileSync('./data/2_exam.txt')
          .toString().split('\n');

 console.log(input)

let a = parseInt(input[0]);
let b =input[1];

for(let i = 2; i >= 0; i--) {
  console.log(a * b[i]);
}

console.log(a * b);

//let [A, B] = fs.readFileSync('./data/2_exam.txt')
//          .toString().split('\n').map(Number);

//const three = A * (B % 10); // A * 5
//const four = A * (Math.floor((B % 100) / 10)); // A * 8
//const five = A * (Math.floor(B / 100)); // A * 3
//const six = A * B; //A * B

//console.log(three);
//console.log(four);
//console.log(five);
//console.log(six);







