import promptSync from "prompt-sync";

const prompt = promptSync()

let userInput = prompt("On a scale 1 to 10 how much do you like the name")
userInput = Number(userInput)

while (userInput >0 && userInput <11) {
    userInputt = prompt("On a scale 1 to 10 how much do you like the name? ");
    console.log(userInput)
}