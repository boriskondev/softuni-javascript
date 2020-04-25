function graduation(input) {
    let name = input.shift();
    let currentGrade = Number(input.shift());
    let sumGrades = 0;
    let year = 1;
    while (year <= 12) {
        if (currentGrade >= 4) {
            sumGrades += currentGrade;
            year += 1;
        }
        currentGrade = Number(input.shift())
    }
    console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`)
}

graduation(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5])