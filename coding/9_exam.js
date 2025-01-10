let fs = require('fs');

let input = fs.readFileSync('./data/9_exam.txt')
          .toString().split('\n');
console.log(input);

// 숫자 A와 B 가져오기
let [A, B] = input[0].split(' ');

// 숫자를 거꾸로 뒤집는 함수
function reverseNumber(num) {
  return parseInt(num.split('').reverse().join(''), 10);
}

// 두 숫자를 거꾸로 읽기
let reversedA = reverseNumber(A);
let reversedB = reverseNumber(B);

// 상수의 대답: 큰 수 출력
console.log(Math.max(reversedA, reversedB));

