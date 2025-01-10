let fs = require('fs');

let input = fs.readFileSync('./data/4_exam.txt')
          .toString().split('\n');
num = parseInt(input[0]);
data = input[1].split(' ').map(Number);
console.log(num);
console.log(data);

let min = 9999999999;
let max = 0;

for(let i = 0; i < num; i++) {
  // 가장 큰 값
  if(max < data[i]) max = data[i];
  // 가장 작은 값
  if(min > data[i]) min = data[i];
  }

  console.log(min + ' ' + max);

  // reduce를 이용
  min = data.reduce((x, y) => Math.min(x, y));
  max = data.reduce((x, y) => Math.max(x, y));

  console.log(min + ' ' + max);

//const N = parseInt(input[0]); // 정수의 개수
//const numbers = input[1].split(" ").map(Number); // 정수 배열로 변환

// 최솟값, 최댓값 초기화
//let min = Infinity;
//let max = -Infinity;

// 반복문을 통해 최솟값과 최댓값 계산
//for (let i = 0; i < N; i++) {
//  if (numbers[i] < min) {
//    min = numbers[i];
//  }
// if (numbers[i] > max) {
//    max = numbers[i];
//  }
//}

// 출력
//console.log(`${min} ${max}`);