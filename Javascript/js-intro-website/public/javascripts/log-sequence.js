
// {
//     console.log("Start") // step 1
//     setTimeout(()=>{
//         console.log("1 sec passed") //step 2
//         setTimeout(()=>{
//             console.log("another 2 sec passed") // step 3
//             setTimeout(()=>{
//                 console.log("End")
//             }, 2000)
//         }, 2000)
//     }, 1000)

// }



{
function wait(ms) {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(ms/1000), ms)
    })
}

console.log("Start")
wait(1000)
.then((seconds) => {
    console.log(`${seconds} sec passed`);
    return wait(2000)
})
.then((seconds) => {
    console.log(`another ${seconds} sec passed`);
    return wait(2000);
})
.then(() => {
    console.log("End")
})

//equivalent code
// const seconds =  wait(1000);
// console.log(`${seconds} has passed`)
// const anotherSeconds =  wait(2000);
// console.log(`another ${anotherSeconds} has passed`)


}

{

function wait(ms) {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(ms/1000), ms)
    })
}

(async () => {
    const seconds =  await wait(1000);
    console.log(`${seconds} has passed`)
    const anotherSeconds =  await wait(2000);
    console.log(`another ${anotherSeconds} has passed`)
})();


}