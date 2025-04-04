// 연습문제4) 숫자를 입력받아 양수, 0, 음수를 구분하는 코드?
const num = Number(prompt("숫자를 입력하세요"));

if (num > 0) {
  console.log("양수");
} else if (num == 0) {
  console.log("0입니다");
} else {
  console.log("음수");
}
