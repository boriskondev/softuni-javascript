function palindromeIntegers(input) {
    let end = input.length;
    for (let index = 0; index < end; index++) {
        let num = input.shift().toString();
        let reversedNum = num.toString().split("").reverse().join("");
        if (num == reversedNum) {
            console.log("true");
        } else {
            console.log("false"); 
        }
    }
}

palindromeIntegers([123,323,421,121]);