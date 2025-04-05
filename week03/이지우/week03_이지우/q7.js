for(let i=1;i<6;i++){
    let star = ""
    for(let j=0;j<i;j++) {
        star += "*"
    }
    console.log(star);
}

/*
for(let i = 1; i < 6; i++) {
    for(let j = 0; j < i; j++) {
        console.log("*");
    }
    console.log();
}
console.log();는 undefined를 출력
따라서 별을 다 찍어준 뒤에 console.log로 별 출력
*/