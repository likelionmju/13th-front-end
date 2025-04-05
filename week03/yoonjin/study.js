alert('🎮 숫자 맞추기 게임 시작!');

let inputs = []; 
let a = Math.floor(Math.random() * 100) + 1;
let count = 0;

let input = prompt('사용자 입력 (1~100):');
let q = Number(input);

while (isNaN(q) || q < 1 || q > 100) {
  alert('1부터 100 사이의 숫자를 입력해주세요!');
  input = prompt('사용자 입력 (1~100):');
  q = Number(input);
}

inputs.push(q);
count++;

while (q !== a) {
  if (q > a) {
    alert('너무 커요!');
  } else {
    alert('너무 작아요!');
  }

  input = prompt('사용자 입력 (1~100):');
  q = Number(input);

  while (isNaN(q) || q < 1 || q > 100) {
    alert('1부터 100 사이의 숫자를 입력해주세요!');
    input = prompt('사용자 입력 (1~100):');
    q = Number(input);
  }

  inputs.push(q);
  count++;
}

alert(`정답입니다! ${count}번 만에 맞췄어요 🎉`);
alert(`입력한 숫자들: [${inputs.join(', ')}]`);
