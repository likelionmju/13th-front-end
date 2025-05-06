const student = {
    name : "홍길동",
    age : 20,
    isGraduated : false,
    subjects : ["수학", "영어", "과학"],
    address : {
        city : "서울",
        street : "강남구 역삼동"
    },
    getStudentInfo : function () {
        return `${this.name}은(는) ${this.age}세이고, ${this.address.city}에 살고 있습니다.`;
    },
    addSubject : function () {
        this.subjects.push(subject);
    }
};

// 객체 문제 1
console.log(student.name);
console.log(student.isGraduated);
console.log(student.subjects[1]);
console.log(student.address.city);

// 객체 문제 2
student.getStudentInfo();
// '홍길동은(는) 20세이고, 서울에 살고 있습니다.

// 객체 문제 3
student.age=21;
student.subjects.push("컴퓨터");
console.log(student.subjects)

// 객체 문제 4
student.address.street = "서초구 반포동";
console.log(student.address.street);

// 비구조화 할당 문제 1
function displayPerson(person) {
    let {name, age} = person;
    console.log(`이름: ${person.name}`)
    console.log(`나이: ${person.age}`)
}

let personInfo = {
    name : "Yoonho Jung",
    age : 24
}

displayPerson(personInfo);

// 비구조화 할당 문제 2
const user = {
    name : "이지은",
    age : 30,
    job : "가수",
    address : {
        city : "서울",
        district : "강남구"
    }
};

const {name, age, job, address : {city, district}} = user;

// 함수 심화 문제 1
function greeting(name) {
    return `안녕하세요, ${name}님!`;
}

console.log(greeting("김미미"))
// ->
const greeting = (name) => {
    console.log(`안녕하세요, ${name}님`);
};

greeting("김미미");

// 함수 심화 문제 2
let fruits = ["Apple", "Banana", "Cherry"]
fruits.forEach((value, index)  => {
    console.log(`${index+1}.${value}`);
});

// 함수 심화 문제 3
ClickBtn.addEventListener("click", () => {
    setTimeout(() => {
        alert("안녕하세요");
    }, 3000);
});


// 동기/비동기 문제 1 ★★★★★
let htmlContainer = document.getElementById("htmlContainer")
let updateButton = document.getElementById("updateHtml")
let htmlInput = document.getElementById("htmlInput")

updateButton.addEventListener("click", async function () {
    let userInputHtml = htmlInput.value;
    try {
        const response = await fetch('/update-html', { //update-html 경로로 HTTP 요청을 보내고 await을 사용해 이 요청이 완료될 때 까지 기다림
            method : 'POST', // HTTP 메서드를 POST로 지정(서버에 데이터를 전송할 때 사용)
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({html : userInputHtml})
        });

        const result = await response.json(); // 서버에서 처리된 결과 받기
        htmlContainer.innerHTML = result.updateHtml;
    }
    catch (error) {
        console.log(erreor)
        htmlContainer.innerText = '오류가 발생했습니다.';
    }
});

// 동기/비동기 문제 2
Promise.resolve("1")
    .then(result => {
        console.log(result);
        return "2";
    })
    .then(result => {
        console.log(result);
        return "3";
    })
    .then(result => {
        console.log(result);
    });

console.log("마지막 줄");
// 마지막 줄
// 1
// 2
// 3

Promise.reject("에러 발생")
    .then(() => {
        console.log("성공!");
    })
    .catch((err) => {
        console.log("잡힌 에러:", err);
    })
    .then(() => {
        console.log("계속 진행")
    });
// 잡힌 에러 : 에러 발생
// 계속 진행

const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2초 후 완료");
    }, 2000);
});

console.log("시작");

p.then(result => {
    console.log(result);
});

console.log("끝");
// 시작
// 끝
// 2초 후 완료

// DOM조작과 Event처리 문제 1
const Btn = document.getElementById("myButton");

Btn.addEventListener('click', () => {
    console.log("버튼이 클릭되었습니다!")
})

Btn.onclick = function () {
    console.log("버튼이 클릭되었습니다!")
}

// DOM조작과 Event처리 문제 2
const colorChangeBtn = document.getElementById("colorChangeBtn");

colorChangeBtn.addEventListener('click', () => {
    const currentColor = colorChangeBtn.style.backgroundColor;

    if(currentColor === 'red') {
        colorChangeBtn.style.backgroundColor = 'blue';
    }else{
        colorChangeBtn.style.backgroundColor = 'red';
    }
})

// DOM조작과 Event처리 문제 3
const myInput = document.querySelector("#myInput");

myInput.addEventListener('keyup', (event) => {
    console.log(event.target.value);
})

// DOM조작과 Event처리 문제 4
const hoverBox = document.getElementById("hoverBox")

hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'skyblue'
})
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'coral'
})

// DOM조작과 Event처리 문제 5
const messageContainer = document.getElementById("messageContainer");
const userInput = document.getElementById("userInput");
const addButton = document.getElementById("addMessage");

// 이벤트 처리
addButton.addEventListener("click", () => {
  const message = userInput.value.trim();

  if (message) {
    // 새 <p> 요소 생성
    const newMessage = document.createElement("p");
    newMessage.textContent = message;

    // messageContainer의 자식으로 추가
    messageContainer.appendChild(newMessage);

    // 입력창 비우기
    userInput.value = "";
  }
});


// DOM조작과 Event처리 문제 6
updateButton.addEventListener('click', () => {
    const userHtml = htmlInput.value;
    htmlContainer.innerHTML = userHtml;
})
