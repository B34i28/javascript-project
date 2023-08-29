function judge(grade){
    switch (true) {
        case grade === "A+":
            console.log("You got an ", grade , ": Excellent!");
            break;
        case grade === "A":
            console.log("You got an ", grade , ": Good Job");
            break;
        case grade === "B":
            console.log("You got an ", grade , ": Ok");
            break;
        case grade === "C":
            console.log("You got an ", grade , ": Need Improvement");
            break;
        default:
            console.log("An" , grade , ": Oops. Try Again");
    }
}

function getGrade ( percentage , callback) {
    let grade;
    switch (true) {
        case percentage >= 90:
            grade = "A+";
            break;
        case percentage >= 80:
            grade = "A";
            break;
        case percentage >= 70:
            grade = "B";
            break;
        case percentage >= 60:
            grade = "C";
            break;
        default:
            grade = "F"
    }
    callback(grade);
}

getGrade(80 , judge)