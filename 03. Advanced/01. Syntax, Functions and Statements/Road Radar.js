function roadRadar(arr) {
    let currentSpeed = Number(arr.shift());
    let area = arr.shift();
    let speedLimit;
    switch (area) {
        case "residential":
            speedLimit = 20;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "motorway":
            speedLimit = 130;
            break;
    }
    let difference = currentSpeed - speedLimit;
    let speedingType = false
    if (difference > 0 && difference <= 20) {
        speedingType = "speeding";
    } else if (difference > 20 && difference <= 40) {
        speedingType = "excessive speeding";
    } else if (difference > 40) {
        speedingType = "reckless driving";
    }
    if (speedingType != false) {
        console.log(speedingType);
    }
}

roadRadar([200, 'motorway'])