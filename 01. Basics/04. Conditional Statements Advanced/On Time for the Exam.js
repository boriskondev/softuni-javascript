function onTimeForTheExam(a, b, c, d) {
    let hourExam = Number(a);
    let minuteExam = Number(b);
    let hourArrival = Number(c);
    let minuteArrival = Number(d);
    let time = 0;

    let differenceMinutes = ((hourExam * 60) + minuteExam) - ((hourArrival * 60) + minuteArrival);

    let hh = Math.abs(~~(differenceMinutes / 60));
    let mm = Math.abs(differenceMinutes % 60);

    if (mm == 0) {
        mm = "00";
    }

    if (hh == 0) {
        time = `${mm} minutes`;
    } else {
        if (Number(mm) <= 9 && Number(mm) != 0) {
            mm = `0${mm}`
        }
        time = `${hh}:${mm} hours`;
    }

    let beforeOrAfter = "";

    if (differenceMinutes >= 0 && differenceMinutes <= 30) {
        console.log("On time");
        beforeOrAfter = "before";
    } else if (differenceMinutes > 30) {
        console.log("Early");
        beforeOrAfter = "before";
    } else if (differenceMinutes < 0) {
        console.log("Late");
        beforeOrAfter = "after";
    }

    if (Math.abs(differenceMinutes) > 0) {
        console.log(`${time} ${beforeOrAfter} the start`);
    }
}

onTimeForTheExam(9, 30, 9, 50);
onTimeForTheExam(9, 00, 10, 30);
onTimeForTheExam(10, 00, 10, 00);
onTimeForTheExam(9, 00, 8, 30);
onTimeForTheExam(14, 00, 13, 55);
onTimeForTheExam(11, 30, 10, 55);
onTimeForTheExam(16, 00, 15, 00);
onTimeForTheExam(11, 30, 8, 12);
onTimeForTheExam(11, 30, 12, 29);
