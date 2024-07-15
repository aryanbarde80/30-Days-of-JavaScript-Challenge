// Here we used or operator bcoz we need any one expression to be true either the divsibility with 4 and not 100 or 400 only 

const year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}