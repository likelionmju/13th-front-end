// Math.floor(Math.random()*(최대값 - 최소값 + 1) + 최소값) : 자연수 뽑기
// floor 내림, random : 랜덤 숫자 (0~1사이의 난수 뽑기)
const random = Math.floor(Math.random()*(100 - 1 + 1) + 1);
const inputNum = [];
let run = true;
let i=0;
while(run){
    let num = Number(prompt('숫자를 입력해주세요.'));
    if(num > 100 || num < 1) {
        alert('사용자 입력 : ' + num);
        alert('1부터 100 사이의 숫자를 입력해주세요!');
        inputNum.push(num);
    }else if(random < num && num <= 100){
        alert('사용자 입력 : ' + num);
        alert('너무 커요!');
        inputNum.push(num);
    }
    else if(random > num && num >= 1){
        alert('사용자 입력 : '+ num);
        alert('너무 작아요!');
        inputNum.push(num);
    }else if(num = random){
        alert('사용자 입력 : '+ num);
        i ++;
        alert(`정답입니다! ${i}만에 맞췄어요 🎉`);
        inputNum.push(num);
        alert('입력한 숫자들 :' + '[' +inputNum + ']');
        run = false;
    }
    i++;
}