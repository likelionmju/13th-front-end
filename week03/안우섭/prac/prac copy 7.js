// 연습문제7) 5층 짜리 별 찍기 코드?
let i = 1;
for (i; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
