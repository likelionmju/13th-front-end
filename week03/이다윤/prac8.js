//연습문제8
let a = Number(prompt("a를 입력해주세요"));
let b = Number(prompt("b를 입력해주세요"));
let num = 0;

function sumNumbers() {
  for (let i = a; i <= b; i++) {
    num += i;
  }
}
sumNumbers();
console.log(`${num}`);
