// 연습문제8) a와 b를 입력받아 a ~ b까지 더하는 함수를 만드는 코드?
let a = Number(prompt("a를 입력해주세요"));
let b = Number(prompt("b를 입력해주세요"));

function add(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(`${a}부터 ${b}까지의 합: ${add(a, b)}`);
