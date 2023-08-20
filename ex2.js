
const delay = (ms)=>{
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function helloasync(){
    await delay(3000);
    return "hello async";
}

async function main(){
    const res = await helloasync();
    console.log(res);
}

main();

const ex3 = require("./ex3");
console.log(ex3.printing());


//npm 실습함
//npm init 후 설정하면 package.json이 생성되고, 여기에 npm 사용 정보들이 표기되는 듯

const randomColor = require("randomcolor");
console.log(randomColor);

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);