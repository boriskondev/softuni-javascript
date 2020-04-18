function calculateScholarship(income, grade, salary) {
    let familyIncome = Number(income);
    let averageGrade = Number(grade);
    let minSalary = Number(salary);
    let socialScholarship = 0;
    let excellentScholarship = 0;
    let scholarship = false;

    if (familyIncome < minSalary && averageGrade > 4.50) {
        socialScholarship = minSalary * 0.35;
        scholarship = true;
    }

    if (averageGrade >= 5.5) {
        excellentScholarship = averageGrade * 25;
        scholarship = true;
    }

    if (scholarship == false) {
        console.log("You cannot get a scholarship!");
    } else if (socialScholarship > 0 && socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (excellentScholarship > 0 && excellentScholarship >= socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    }
}

calculateScholarship(480.00, 4.60, 450.00);
calculateScholarship(300.00, 5.65, 420.00);