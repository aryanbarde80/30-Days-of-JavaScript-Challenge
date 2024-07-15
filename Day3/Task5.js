const score = 99;
let grade;

switch(true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 75 && score <= 89):
        grade = "B";
        break;
    case (score >= 60 && score <= 74):
        grade = "C";
        break;
    case (score >= 33 && score <= 59):
        grade = "D";
        break;
    case (score < 33):
        grade = "F";
        break;
    default:
        grade = "Invalid Case";
}

console.log(grade);
