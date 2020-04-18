function timePlus15(h, m) {
    let hour = Number(h);
    let minute = Number(m);
    let next15 = minute + 15;
    if (next15 > 59) {
        next15 = next15 - 60;
        hour += 1;
    }

    if (hour > 23) {
        hour = 0;
    }

    if (next15 < 10) {
        console.log(`${hour}:0${next15}`);
    } else {
        console.log(`${hour}:${next15}`);
    }
}

timePlus15(1, 46);
timePlus15(1, 01);
timePlus15(23, 59);
timePlus15(11, 08);
timePlus15(12, 49);