function circleArea(input) {
    let inputType = (typeof input);
    if (inputType == "number") {
        console.log((Math.PI * input ** 2).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);
circleArea("5");