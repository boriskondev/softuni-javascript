function swimmingRecord(rec, dist, spd) {
    let worldRecord = Number(rec);
    let distance = Number(dist);
    let speed = Number(spd);
    let totalTime = distance * speed;
    let delay = Math.floor(distance / 15) * 12.5;
    totalTime += delay;
    if (worldRecord > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let diff = totalTime - worldRecord;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

swimmingRecord(10464, 1500, 20);
swimmingRecord(55555.67, 3017, 5.03);