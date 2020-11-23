for (i = 10; i < 40; i++) {
    let number = (Math.floor(123456 % i));
    number.toFixed();
    let singleDigitNumber = number[0];
    console.log(singleDigitNumber);
}
