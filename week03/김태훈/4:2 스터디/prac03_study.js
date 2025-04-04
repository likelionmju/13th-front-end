let flag = 0;
let input = 0;
const num = [];
const randNum = Math.floor(Math.random() * (100 - 1) + 1);

function reset() {
    document.querySelector("#input").value = "";
}

function repeat() {
    input = Number(document.getElementById('input').value);

    if (input < 1 || input > 100 || isNaN(input)) {
        alert(`1부터 100 사이의 숫자를 입력해주세요!`);
        reset();
        return;
    }

    flag++;
    num.push(input);

    if (input > randNum) {
        alert(`숫자가 너무 커요!`);
    } else if (input < randNum) {
        alert(`숫자가 너무 작아요!`);
    } else {
        alert(`정답입니다! 답은 ${input}이었습니다! ${flag}번 만에 맞추셨습니다!`);
        alert(`입력한 숫자들: ${num.join(', ')}`);
        document.getElementById('input').disabled = true;
    }
    reset();
}

alert(randNum);
alert(`숫자 맞추기 게임을 시작합니다! (1~100)`);