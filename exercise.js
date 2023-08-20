const taskA = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    })
}

const taskB = (a) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    })
}

const taskC = (a) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    })
}

taskA(5,1).then((a_res)=>{
    console.log(`A result:${a_res}`);
    return taskB(a_res);
}).then((b_res)=>{
    console.log(`B result:${b_res}`);
    return taskC(b_res);
}).then((c_res)=>{
    console.log(`C result:${c_res}`);
})


// taskA(5,1).then((a_res) => {
//     console.log(`A result:${a_res}`)
//     taskB(a_res).then((b_res)=>{
//         console.log(`B result:${b_res}`)
//         taskC(b_res).then((c_res) => {
//             console.log(`C result:${c_res}`)
//         })
//     })
// }) //이건 여전히 콜백함수 형식



// taskA(3,4,(a_res)=>{
//     console.log(`taskA:${a_res}`)
//     taskB(a_res,(b_res)=>{
//         console.log(`taskB:${b_res}`)
//         taskC(b_res,(c_res)=>{
//             console.log(`taskc:${c_res}`)
//         })
//     })
// }) //콜백지옥

console.log("==================================");

