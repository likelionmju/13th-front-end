function random() {
  return Math.floor(Math.random() * 100) + 1;
}

answer = random(1, 100);
const numbox = [];
let num = 0;
let cnt = 0;
let run = true;

alert("🎮 숫자 맞추기 게임 시작!");
function playGame() {
  while (run) {
    num = Number(prompt("숫자를 입력하세요."));
    alert("사용자 입력: " + num);
    if (isNaN(num) || num < 1 || num > 100) {
      alert("1부터 100사이의 숫자를 입력해주세요!");
    } else if (num > answer) {
      alert("너무 커요!");
    } else if (num < answer) {
      alert("너무 작아요!");
    } else if (num == answer) {
      run = false;
    }
    numbox.push(num);
    cnt++;
  }
}

playGame();

alert(`정답입니다! ${cnt}번 만에 맞췄어요 🎉`);
alert(`입력한 숫자들 : [${numbox}]`);
