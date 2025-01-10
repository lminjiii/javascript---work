let fs = require('fs');

let input = fs.readFileSync('./data/6_exam.txt')
          .toString().split('\n');
// 전체 시료 갯수
let n = parseInt(input[0]);
console.log('n = ' + n);

for(let i = 1; i <= n; i++) {
  let data = input[i].split(' ').map(Number);
  let m = data[0];
  let sum = 0;
  for(let j = 0; j < m; j++) {
    sum += data[j];
  }
  // 총점 계산
  console.log(sum);
  // 평균 계산
  let avg = sum / m;
  console.log(avg);
  // 평균보다 큰 값의 수 저장 변수
  let cnt;
  for(let k = 1; k < n; k++) {
    if(data[k] > avg) cnt = cnt + 1;
  }
  // 평균 이상자 수의 비율
  let rate = (cnt / n);
  console.log(rate.toString());
}

// 테스트 케이스 수
//let C = parseInt(input[0]); // 첫 번째 줄은 테스트 케이스 개수

// 결과를 저장할 배열
//let results = [];

// 각 테스트 케이스 처리
//for (let i = 1; i <= C; i++) {
  // 각 줄을 공백으로 분리하여 배열로 변환
//  let data = input[i].split(" ").map(Number);

//  let N = data[0];  // 첫 번째 값은 학생 수
//  let scores = data.slice(1); // 나머지는 점수 배열

 // 평균 계산
// let sum = scores.reduce((acc, cur) => acc + cur, 0);
// let average = sum / N;

 // 평균을 넘는 학생 수 계산
// let aboveAverageCount = scores.filter(score => score > average).length;

 // 비율 계산 (소수점 셋째 자리까지)
// let percentage = (aboveAverageCount / N) * 100;

 // 결과 배열에 저장
// results.push(percentage.toFixed(3) + "%");
//}

//console.log(results.join('\n'));