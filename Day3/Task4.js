/* Learning ->> Switch Statements */

// Implemented it using function

function getWeekDay(dayNumber) {
    let weekDay;

    switch (dayNumber) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
        default:
            weekDay = "Invalid day number";
    }

    return weekDay;
}
console.log(getWeekDay(1)); 
console.log(getWeekDay(4)); 
console.log(getWeekDay(7)); 