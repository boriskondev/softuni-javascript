function examPreparation(input) {
    let poorGradesCounter = 0;
    let goodGradesCounter = 0;
    let sumGoodGrades = 0;
    let lastProblem;
    let poorGradesAllowance = Number(input.shift());
    while (true) {
        let problemDescription = input.shift();
        if (problemDescription == "Enough") {
            console.log(`Average score: ${(sumGoodGrades / goodGradesCounter).toFixed(2)}`);
            console.log(`Number of problems: ${goodGradesCounter}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        let problemGrade = Number(input.shift());
        if (problemGrade <= 4) {
            poorGradesCounter += 1;
            if (poorGradesCounter == poorGradesAllowance) {
                console.log(`You need a break, ${(poorGradesCounter)} poor grades.`);
                break;
            }
        }
        sumGoodGrades += problemGrade;
        goodGradesCounter += 1;
        lastProblem = problemDescription;
    }
}

examPreparation([3, "Money", 6, "Story", 4, "Spring Time", 5, "Bus", 6, "Enough"]);