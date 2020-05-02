function perfectNumber(num) {
    let properDivisorsSum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            properDivisorsSum += i;
        }
    }
    if (properDivisorsSum == num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")      
    }
}

perfectNumber(28);