const randomNumber = Math.round(Math.random() * 100) + 1;
let answer_list = [];
let attempts = 0;
let correct = false;
let user_answer = null;

const answer = function () {
  user_answer = prompt("1~100 사이 숫자를 입력하세요:");
  if (
    isNaN(user_answer) ||
    Number(user_answer) < 1 ||
    Number(user_answer) > 100
  ) {
    alert("1부터 100 사이의 숫자를 입력해주세요!");
    return;
  }
  attempts++;
  answer_list.push(user_answer);
  console.log(`시도 횟수: ${attempts}`);
};

while (!correct) {
  answer();
  if (Number(user_answer) < 1 || Number(user_answer) > 100) {
    continue;
  }
  if (Number(user_answer) == randomNumber) {
    alert(`정답입니다.${attempts}번 만에 맞췄어요.`);
    alert(`입력한 숫자들.${answer_list.join(",")}`);
    correct = true;
  } else if (Number(user_answer) > randomNumber) {
    alert("더 작습니다.");
  } else {
    alert("더 큽니다.");
  }
}
