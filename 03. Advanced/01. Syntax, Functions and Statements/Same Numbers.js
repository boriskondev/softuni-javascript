function sameNumbers(num) {
    let numToStr = num.toString();
    let base = Number(numToStr[0]);
    let sum = 0;
    let areSame = true;
    for (char of numToStr) {
        if (Number(char) != base) {
            areSame = false;
        } 
        sum += Number(char);
    }
    if (areSame) {
        console.log("true");
        console.log(sum)
    } else {
        console.log("false");
        console.log(sum)
    }
}

sameNumbers(1234)