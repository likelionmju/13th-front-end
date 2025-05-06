const main = document.getElementById('main');
const qna = document.getElementById('qna');
const endPoint = 12;
const select = [];


const start = () => {
    main.style.animation = "fadeOut 1s";
    setTimeout(() =>{
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = 'none';
            qna.style.display = 'flex';
        }, 450);

        let questionIndex = 0;
        goNext(questionIndex);
    }, 450);
};

// 질문에 대한 답변 버튼 생성(사용자 답변 저장)
const goNext = (questionIndex) => {
    if(questionIndex === endPoint) { 
        goResult();
        return ;
    }

    let questionBox = document.getElementById("question-box");
    questionBox.innerHTML = qnaList[questionIndex].q;

    let statusNum = document.getElementById("status-number");
    statusNum.innerHTML = questionIndex + 1 + "/12";

    for(let i in qnaList[questionIndex].a) {
        addAnswerButton(qnaList[questionIndex].a[i].answer, questionIndex, i);
    }

    let status = document.getElementById("status-bar");
    status.style.width = (100 / endPoint)*(questionIndex + 1) + "%";
};

// 답변 버튼 추가
const addAnswerButton = (answerText, questionIndex, index) => {
    let answerBox = document.getElementById('answer-box');
    let answerButton = document.createElement('button')

    answerButton.classList.add('answer-list');
    answerButton.classList.add('fadeIn')
    answerBox.appendChild(answerButton);
    answerButton.innerHTML = answerText;

    answerButton.addEventListener('click', () => {
        select[questionIndex] = index;
        let buttonChildren = document.getElementsByClassName('answer-list');
        for(let i = 0; i < buttonChildren.length; i++) {
            buttonChildren[i].disabled = true;
            buttonChildren[i].style.animation = "fadeOut 1s";
        }

        setTimeout(() =>{
            for(let i = 0; i< buttonChildren.length; i++){
                buttonChildren[i].style.display = 'none';
            }
            goNext(++questionIndex);
        }, 450);
    });
};

// 결과 페에지로 이동
const goResult = () => { 
    qna.style.animation = 'fadeOut 1s';
    setTimeout(() => {
        result.style.animation = 'fadeIn 1s';
        setTimeout(() => {
            qna.style.display = 'none';
            result.style.display = 'flex';
        }, 450);
    });
    calculateResult();
    setResult();
};

// 결과 계산
const calculateResult = () => {
    let pointArray = [
        {
            name: 'Java',
            value: 0,
            key: 0, 
        },
        {
            name: 'Javascript',
            value: 0,
            key: 1, 
        },
        {
            name: 'Python',
            value: 0,
            key: 2, 
        },
        {
            name: 'C++',
            value: 0,
            key: 3, 
        },
        {
            name: 'Swift',
            value: 0,
            key: 4, 
        },{
            name: 'Kotlin',
            value: 0,
            key: 5, 
        },{
            name: 'SQL',
            value: 0,
            key: 6, 
        },
    ];
    for (let i = 0; i < endPoint; i++) {
        let target = qnaList[i].a[select[i]];
        for (let j = 0; j<target.type.length; j++) {
            for(let k = 0; k<pointArray.length; k++) {
                if(target.type[j] === pointArray[k].name) {
                    pointArray[k].value += 1;
                }
            }
        }
    }
    
    let resultArray = pointArray.sort(function (a,b) {
        if(a.value > b.value) {
            return -1; //a가 b보다 앞에 오도록
        }

        if(a.value < b.value) {
            return 1; //b가 a보다 앞에 오도록
        }
        return 0; //값 같으면 순서 변경 x
    });
    console.log(resultArray);
    let resultWord = resultArray[0].key;
    return resultWord;
};

//결과 출력
const setResult = () => {
    let point = calculateResult();

    const resultName = document.getElementById('result-name');
    resultName.innerHTML = resultList[point].name;

    const resultTitle = document.getElementById('result-title');
    resultTitle.innerHTML = resultList[point].title;

    const resultDesc = document.getElementById('result-desc');
    resultDesc.innerHTML = resultList[point].desc;
};




