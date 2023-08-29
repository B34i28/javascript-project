// This BMI calculator was on given values we can also take values by prompt
// setting the value of height in inches 
// 6 feet in inches
let height = 72;

// Setting the value of weight in pounds
// 66 kilo in pounds
let weight = 145.505;

// converting the height in cm
let oneCm = 2.54;
let heightInCm = height * oneCm;
console.log(heightInCm ,"Height in Centi meter")

// height in meter 
let heightInMeter = heightInCm * 0.01;

// converting the weight in kilo 
let oneKg = 0.453592;
let weightInKilo = weight * oneKg;
console.log(weightInKilo , "Weight in Kilo Gram")

// Output of the BMI 
let bMI = weightInKilo / heightInMeter**2;
console.log(bMI, "Body Mass Index")