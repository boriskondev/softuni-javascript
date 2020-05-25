function timeToWalk(steps, footprintLength, studentSpeed) {    let timeTook = []
    let distance = steps * footprintLength;
    let time = Math.round(distance / studentSpeed * 3.6);
    time += Math.floor(distance / 500) * 60;
    
    const seconds = time % 60;
    time -= seconds;
    time /= 60;
    const minutes = time % 60
    time -= minutes;
    time /= 60;
    const hours = time;

    function pad(num) {
        if (num < 10) {
            return "0" + num
        } else {
            return num
        }
    }

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    
}

timeToWalk(4000, 0.60, 5);