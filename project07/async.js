const myPromise = new Promise((resolve , reject) => {
    resolve ("I am resolve ")
})

async function myFunction() {
    const resolveValue = await myPromise;
    console.log(resolveValue);
}

myFunction();