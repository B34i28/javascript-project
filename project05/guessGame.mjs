import promptSync from "prompt-sync";

const prompt = promptSync()

const maxValue = 10;
const randomNumber = Math.floor(Math.random()*maxValue) + 1
let status = false;

while(!status){
    let userInput = prompt("Guss the number between 1 to " + maxValue + " ") 
    userInput = Number(userInput)
    if (userInput === randomNumber){
        status = true;
        console.log("You Won! The number was " + randomNumber)
    } else if (userInput>randomNumber) {
        console.log("Sorry your guess was too high. ")
    } else {
        console.log("Sorry your guess was to low. ")
    }
}

