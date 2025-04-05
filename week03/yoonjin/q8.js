// 연습문제 8
let a = Number(prompt("a를 입력해주세요"));
let b = Number(prompt("b를 입력해주세요"));

function sum(m, n) {
  let num = 0;
  if (m > n) {
    for (n; n <= m; n++) {
      num += n;
    }
  } else if (m < n) {
    for (m; m <= n; m++) {
      num += m;
    }
  } else {
    num = m;
  }
  return num;
}

console.log(sum(a, b));
