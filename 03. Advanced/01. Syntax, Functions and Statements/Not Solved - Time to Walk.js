function timeToWalk(steps, footprintLength, studentSpeed) {
    let distanceKilometers = (steps * footprintLength) / 1000;
    let time = (distanceKilometers / studentSpeed) * 60
    let additionalTime = Math.floor(distanceKilometers * 1000 / 500);
    // let totalTime = time + additionalTime;
    console.log(Math.round(time / 60));
}

timeToWalk(4000, 0.60, 5);