// console.log
console.log("Hello, Javascript!")

// alert
alert("Hello, Javascript!")

// confirm
confirm("Hello, Javascript!")

// prompt
prompt("Hello, Javascript!")

// 변수
let a = 1;
let b = 2;
let c = a + b;
console.log(c);

// 오류
// let a = 1;

var d = 1;
var e = 2;
var f = d + e;
console.log(f);

var d = 1; // 중복 선언 가능

const g = 1; 
const h = 2; 

// 오류
// const g = 1;

// 자료형
console.log(10+5);
console.log("10+5");
console.log(`10+5: ${10+5}`);

// boolean
console.log(1===1);
console.log(1!==1);
console.log(1==="1");
console.log(1!=="1");

// 연산자
let x = 1;
x += 1;
console.log(x);
x -= 1;
console.log(x);
x *= 3;
console.log(x);
x /= 3;
console.log(x);
x %= 3;
console.log(x);

console.log(x++);
console.log("x의 값값", x);

console.log(x--);
console.log("x의 값값", x);

// 연습문제 1
r = prompt("반지름을 입력하세요");
const pi = 3.14;
let area = pi * r * r;
console.log("원의 넓이는", area, "입니다.");

// 연습문제 2
const foods = ["치즈", "요구르트", "우유"];
foods.push("아이스크림");
console.log(foods);

// 연습문제 3
foods.splice(2, 0, "빵")
console.log(foods);

// if문

// 연습문제 4
const z = Number(prompt("숫자를 입력하세요"));
if (z > 0) {
    console.log("양수입니다.");
} else if (z < 0) {
    console.log("음수입니다.");
} else {
    console.log("0입니다.");
};

// 연습문제 5
const y = Number(prompt("숫자를 입력하세요"));
if (y%2 == 0) {
    console.log(`${y}는 짝수입니다.`);
} else {
    console.log(`${y}는 홀수입니다.`);
};

// for문

for (let i = 0; i < 10 ; i++) {
    console.log(`${i}번째`);
}

for (let i = 0; i < foods.length ; i++) {
    console.log(`${i}번째 음식은 ${foods[i]}입니다.`);
}

// while문

let i = 1;
while (i <= 10) {
    console.log(`${i}번째 반복`);
    i++;
};

let res = confirm("확인 누르면 반복");
while (res) {
    res = confirm("확인 누르면 반복");
};

// 연습문제 6
let SUM = 0;
for (let i = 1; i <= 10; i++) {
    SUM += i;
}
console.log(SUM);

// 연습문제 7
for (let i = 1; i <= 5; i++) {
    let s = "";
    for (let j = 0; j < i; j++) {
        s += "*";
    }
    console.log(s);
}

// 연습문제 8
let num1 = Number(prompt("숫자 입력"));
let num2 = Number(prompt("숫자 입력"));

function Sum(a, b) {
    let n = 0;
    for (let i = a; i <= b; i++) {
        n+=i;
    }
    return n;
}
console.log(Sum(num1, num2));


// --------------------- 스터디 시간 문제 --------------------- //


// JS 만 사용

alert("숫자 맞추기 게임 시작!")
alert("1 ~ 100 사이의 숫자를 맞추면 됩니다!")
let num_js = Math.floor(Math.random() * 100) + 1;
console.log(num_js);

let count_js = 0;
const num_arr_js = [];
while (true) {
    let user_num_js = Number(prompt("숫자 입력: "));
    if (user_num_js < 1 || user_num_js > 100) {
        alert("1 ~ 100 사이의 숫자를 입력하세요!");
    } else {
        count_js++;
        num_arr_js.push(user_num_js);
    
        if (user_num_js == num_js) {
            break;
        } else if (user_num_js > num_js) {
            alert("입력한 숫자가 더 큽니다!");
        } else if (user_num_js < num_js) {
            alert("입력한 숫자가 더 작습니다!");
        }
    }
}

alert(`정답입니다! ${count_js}번 만에 맞췄습니다!`);
alert(`입력한 숫자는 ${num_arr_js} 입니다!`);


// HTML 로 구현

let num_html = Math.floor(Math.random() * 100) + 1;
let count_html = 0;
let num_arr_html = [];

document.getElementById("user_number_input").onkeydown = function (event) {
    if (event.key === "Enter") {
        SubmitNumber();
    }
}

function ResetNumber() {
    count_html = 0;
    num_html = Math.floor(Math.random() * 100) + 1;
    num_arr_html = [];
    document.getElementById("result").style.cssText = "display: none;";
    console.log(num_html);
}

function SubmitNumber() {
    // document.getElementById("infor").innerText = "입력해보세요!";
    let user_num_html = Number(document.getElementById("user_number_input").value);
    count_html++;
    num_arr.push(user_num_html);
    // console.log(user_num);

    if (1 <= user_num_html && user_num_html <= 100) {
        // document.getElementById("infor").innerText = "그겁니다!";
        if (user_num_html == num_html) {
            document.getElementById("infor").innerText = "정답입니다!";
            document.getElementById("result").style.cssText = "display: block;";
            document.getElementById("user_number_input").value = "";
            document.getElementById("input_count").innerText = count;
            document.getElementById("used_number").innerText = num_arr;
        } else if (num_html > user_num_html) {
            document.getElementById("infor").innerText = "입력한 숫자가 더 작습니다!";
            document.getElementById("user_number_input").value = "";
        } else if (num_html < user_num_html) {
            document.getElementById("infor").innerText = "입력한 숫자가 더 큽니다!";
            document.getElementById("user_number_input").value = "";
        }
    } else {
        document.getElementById("infor").innerText = "1 ~ 100 사이의 숫자를 입력하세요!";
    }
    document.getElementById("user_number_input").focus();
}