function verySpecialNumbers(startNum, endNum, n) {
    num = Number(startNum);
    end = Number(endNum);
    divisor = Number(n);
    for (num; num <= end; num++) {
        if ((num % Math.pow(divisor, 2)) == 0) {
            console.log(`Very special number: ${num}`)
        } else if (num % divisor == 0) {
            console.log(`Special number: ${num}`)
        } else {
            console.log(num)
        }
    }
}

verySpecialNumbers(1, 25, 3);
verySpecialNumbers(1, 10, 4);