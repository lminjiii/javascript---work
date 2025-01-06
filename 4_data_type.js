/**
 * Number
 * String
 * Boolean
 * underfined
 * null
 * Symbol
 * Object (function, Array, Object) : 객체 타입
 */

// Number
const age = 20;
const pi = 3.141592;
console.log(typeof age);
console.log(typeof pi);

// String
const mytest = '코딩테스트';
console.log(mytest);
// Escape Character
const iveYujin = '아이브 \n안유진';
console.log(iveYujin);

//  Template Literal 에서 백틱(`)...
const groupName = '아이브';
let idolName = '장원영';
console.log(groupName + '장원영');
console.log(groupName + ' 장원영');
//  xpavmfflt flxjfjf... ${변수명}
console.log(`우리의 주인공은 ${groupName} 
그룹의 ${idolName} 입니다.
환영해 주세요.`)