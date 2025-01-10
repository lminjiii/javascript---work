let fs = require('fs');

let input = fs.readFileSync('./data/5_exam.txt')
          .toString().split('\n');
console.log(input);

let data = input.map(Number);

console.log(data);

let max = data.reduce((x, y) => Math.max(x, y));
console.log(max);
console.log(data.indexOf(max) + 1);

// 숫자 배열로 변환 (빈 줄 제거)
//let numbers = input.map(Number).filter(num => !isNaN(num));

// 최댓값 및 인덱스 초기화
//let max = -Infinity;
//let maxIndex = -1;

// 반복문을 통해 최댓값과 인덱스 찾기
//for (let i = 0; i < numbers.length; i++) {
//  if (numbers[i] > max) {
//    max = numbers[i];
//    maxIndex = i + 1;
//  }
//}

//console.log(max);
//console.log(maxIndex);

