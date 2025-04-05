const rand1 = Math.floor((Math.random() * 100) -1);
let playerArr = [];
let cnt = 0;
function checkNum(){
    while(true){
        num1 = Number(prompt("숫자 1에서 100까지의 수 중 숫자를 입력하세요"));
        if(num1 < 1 || num1 > 100){
            Number(prompt("1부터 100 사이의 수를 입력하세요"));
        }
        else{
            if(rand1 > num1){
                alert('너무 작아요');
            }
            else if(rand1 < num1){
                alert('너무 커요');
            }
            else{
                alert('정답입니다!');
                break;
            }
            playerArr.push(num1);
            cnt++;
        }
    
        
    }    
        
    alert(`지금까지 ${cnt}번 시도 ${playerArr}`);

}

let result = checkNum();
alert(result);


