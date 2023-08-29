let myWork = []

for (let i = 1; i<11; i++){
    let status = i % 2 ? true : false;
    let temporery = {
        name : `Lesson ${1}`,
        status : status
    }
    myWork.push(temporery)
}

console.log(myWork)