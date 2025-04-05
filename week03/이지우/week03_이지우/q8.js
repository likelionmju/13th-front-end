let a = Number(prompt('a를 입력해주세요')) 
let b = Number(prompt('b를 입력해주세요'))

function sumAll(a1,b1){
    let num = 0
    for(let i=a1;i<=b1;i++){
        num += i;
    }
    return num;
}

let result = sumAll(a,b)
console.log(result)