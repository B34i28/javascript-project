// The convertion factor for miles to kilometer
let milesToKilometer = 1.60934;

// Ask user for miles 
let miles = prompt("Enter the distance in miles");
console.log(miles);

// Use the convertion factor to multiply miles into kilometer

let kilometer = miles * milesToKilometer;
console.log(kilometer ," kilometer");

// formated
let sentence = "The distance of " + kilometer + " km is equal to " + miles + " miles.";
console.log(sentence);