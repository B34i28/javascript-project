function greet(fullName) {
    console.log(`Hello ${fullName[0] +" " + fullName[1]}`);
}

function secondFunction(userName ,callback) {
    const name = userName.split(" ")
    callback(name);
}

secondFunction("Adil Altaf",greet)