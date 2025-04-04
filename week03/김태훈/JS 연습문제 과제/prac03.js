// 1번 문제
alert(`1번 문제는 콘솔과 alert로 모두 띄웁니다!`);
console.log('1번 문제');

let r = prompt('반지름을 입력해주세요');
const pi = 3.14;
alert(`넓이는 ${pi * r * r}입니다!`);



//2번 문제
alert(`2번 문제는 콘솔과 alert로 모두 띄웁니다!`);
console.log('2번 문제');

const foods = [`치즈`, `요구르트`, `우유`];
console.log(foods);
alert(foods);
foods.push(`아이스크림`);
console.log(foods);
alert(foods);



//3번 문제
alert(`3번 문제도 콘솔과 alert로 모두 띄웁니다!`);
console.log('3번 문제');

console.log(foods);
alert(foods);
foods.splice(2, 0, `빵`);
console.log(foods);
alert(foods);



//4번 문제
alert(`4번 문제도 콘솔과 alert로 모두 띄웁니다!`);
console.log('4번 문제');

const num4 = Number(prompt(`숫자를 입력하세요`));
if (num4 > 0 ){
    console.log('양수');
    alert('양수');
} else if (num4 == 0 ){
    console.log('0');
    alert('0');
} else if (num4 < 0 ){
    console.log('음수');
    alert('음수');
}



//5번 문제
alert(`5번 문제도 콘솔과 alert로 모두 띄웁니다!`);
console.log('5번 문제');

const num5 = Number(prompt('숫자를 입력하세요'));
let check = num5 % 2;
// if (`${num5 % 2}` == 0 ){
//     console.log('짝수');
//     alert('짝수');
// } else if (`${num5 % 2}` == 1 ){
//     console.log('홀수');
//     alert('홀수');
// } else {
//     console.log('Error');
//     alert('Error');
// } 
if (check === 0 ){
    console.log('짝수');
    alert('짝수');
} else if (check === 1 ){
    console.log('홀수');
    alert('홀수');
} else {
    console.log('Error');
    alert('Error');
} 



//6번 문제
alert(`6번 문제 과정은 콘솔로, 합은 alert로 띄웁니다!`);
console.log('6번 문제');

let sum = 0;
for(i = 1; i<=10; i++){
    console.log(`${sum = sum+i}`);
}
console.log(sum);
alert(sum);



//7번 문제
alert(`7번 문제는 콘솔로만 띄웁니다!`);
console.log('7번 문제');

for(let i = 1; i <= 5; i++) {
    let line = '';
    for(let j = 0; j < i; j++) {
        line += '*';
    }
    console.log(line);
}



//8번 문제
alert(`8번 문제는 콘솔과 alert로 모두 띄웁니다!`);
console.log('8번 문제');

function sum_a_to_b(){
    let a = Number(prompt('a를 입력해주세요'));
    let b = Number(prompt('b를 입력해주세요'));
    let num = 0;
    for(i=a; i<b+1; i++){
        console.log(`${num} + ${i} = ${num+=i}`);
    }   
    console.log(`${num}`);
    alert(`${num}`);
}   
sum_a_to_b();


