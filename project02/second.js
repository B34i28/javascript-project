// the convertion factor from miles to km
let milesToKilometer = 1.60934 ;

// Ask user to entre in kilometer
let kilometer = prompt("Entre the distance in Kilometer")
console.log(kilometer , "Kilometer")

// using convertion factor to get the result

let miles = kilometer / milesToKilometer;
console.log(miles , "Miles")

let sentence = "The distance of " + kilometer + " km is equal to " + miles
console.log(sentence)