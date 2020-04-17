function excellentGrade(num) {
    let grade = Number(num)
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}

excellentGrade(6);
excellentGrade(5);
excellentGrade(5.50);
excellentGrade(5.49);