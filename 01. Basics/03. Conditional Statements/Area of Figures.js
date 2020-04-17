function areaOfFigures(figure, arg1, arg2) {
    let argument_one = Number(arg1);
    let argument_two = Number(arg2);
    let result = 0
    if (figure == "square") {
        result = argument_one * argument_one;
        console.log(result.toFixed(3));
    } else if (figure == "rectangle") {
        result = argument_one * argument_two;
        console.log(result.toFixed(3));
    } else if (figure == "circle") {
        result = Math.PI * argument_one * argument_one;
        console.log(result.toFixed(3));
    }  else if (figure == "triangle") {
        result = (arg1 * argument_two) / 2;
        console.log(result.toFixed(3));
    }
}

areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);