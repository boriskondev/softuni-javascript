function bonusScore(data) {
    let points = Number(data);
    let bonus = 0;

    if (points % 2 == 0) {
        bonus += 1;
    } 

    if (points % 10 == 5) {
        bonus += 2;
    }

    if (points <= 100) {
        bonus += 5;
    } else if (points > 100 && points <= 1000) {
        bonus += 0.2 * points;
    } else {
        bonus += 0.1 * points;
    }

    console.log(bonus);
    console.log(points + bonus);
}

bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);