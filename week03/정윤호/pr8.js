let a = Number(prompt('a를 입력해주세요'));
let b = Number(prompt('b를 입력해주세요'));
let num = 0;
function sum(){
    for(i=a; i<=b; i++){
        num = num + i;
    }
    return num;
}
console.log(sum());
console.log(`${num}`);