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