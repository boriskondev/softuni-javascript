function walking(input) {
    let dailyTarget = 10000;
    let stepsDone = 0;
    let isGoingHome = false;
    let command;
    while (true) {
        command = input.shift();
        if (command == "Going home") {
            stepsDone += Number(input.shift());
            isGoingHome = true;
            break;
        }
        stepsDone += Number(command);
        if (stepsDone >= dailyTarget) {
            console.log("Goal reached! Good job!");
            break;
        }
    }
    if (isGoingHome) {
        if (stepsDone >= dailyTarget) {
            console.log("Goal reached! Good job!");
        } else {
            console.log(`${dailyTarget - stepsDone} more steps to reach goal.`)
        }
    }
}

walking([1000, 1500, 2000, 6500]);
walking([1500, 300, 2500, 3000, "Going home", 200]);
