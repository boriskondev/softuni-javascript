function sumSeconds(first, second, third) {
    let firstSeconds = Number(first);
    let secondSeconds = Number(second);
    let thirdSeconds = Number(third);
    let totalTime = firstSeconds + secondSeconds + thirdSeconds;
    let totalMinutes = Math.floor(totalTime / 60);
    let totalSeconds = totalTime % 60;
    if (totalSeconds < 10) {
        console.log(`${totalMinutes}:0${totalSeconds}`);
    } else {
        console.log(`${totalMinutes}:${totalSeconds}`);
    }
}

sumSeconds(35, 45, 44);
sumSeconds(22, 7, 34);
sumSeconds(50, 50, 49);
sumSeconds(14, 12, 10);