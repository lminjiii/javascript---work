let fs = require('fs');

let input = fs.readFileSync('./data/8_exam.txt')
          .toString().split('\n');
console.log(input);

// 테스트 케이스 수
const T = parseInt(input[0], 10);

// 결과 저장용 배열
let results = [];

// 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(' ');
  const repeatCount  = parseInt(R, 10);
  const repeatedString = S.split('')
                        .map(char => char.repeat(repeatCount))
                        .join('');
  results.push(repeatedString);
}

// 결과 출력
results.forEach(result => console.log(result));
