function loadingBar(num) {
    let percentage = num;
    if (percentage < 100) {
        console.log(`${percentage}% [${"%".repeat(percentage / 10)}${".".repeat(10 - (percentage / 10))}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]")

    }
}

loadingBar(30)
loadingBar(100)