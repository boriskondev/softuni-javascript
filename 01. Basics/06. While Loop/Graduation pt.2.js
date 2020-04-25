function graduation(input) {
    let name = input.shift();
    let currentGrade = Number(input.shift());
    let sumGrades = 0;
    let poorGrades = 0;
    let year = 1;
    let excluded = false;
    while (year <= 12) {
        if (currentGrade >= 4) {
            sumGrades += currentGrade;
            year += 1;
        } else {
            poorGrades += 1;
        }
        if (poorGrades > 1) {
            console.log(`${name} has been excluded at ${year} grade`);
            excluded = true;
            break;
        }
        currentGrade = Number(input.shift())
    }
    if (excluded != true) {
        console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`)
    }
}

graduation(["Gosho", 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
graduation(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3]);