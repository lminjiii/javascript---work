let fs = require('fs');

let input = fs.readFileSync('./data/7_exam.txt')
          .toString().split('\n');
console.log(input);

const N = parseInt(input[0], 10); // 시험 본 과목 수
const scores = input[1].split(' ').map(Number); // 현재 성적 배열

// 최댓값 계산
const maxScore = Math.max(...scores);

// 점수 조작 및 새로운 평균 계산
const nawScores = scores.map(score => (score / maxScore) * 100);
const newAverage = nawScores.reduce((sum, score) => sum + score, 0) / N;

// 결과 출력
console.log(newAverage.toFixed(6)); // 소수점 6자리까지 출력