function vacation(input) {
    let spendingCounter = 0;
    let daysPassed = 0;
    let vacationPrice = Number(input.shift());
    let availableMoney = Number(input.shift());
    while (true) {
        let action = input.shift();
        let actionMoney = Number(input.shift());
        if (action == "save") {
            daysPassed += 1;
            spendingCounter = 0;
            availableMoney += actionMoney;
            if (availableMoney >= vacationPrice) {
                console.log(`You saved the money for ${daysPassed} days.`);
                break;
            }
        } else if (action == "spend") {
            availableMoney -= actionMoney;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            spendingCounter += 1;
            daysPassed += 1;
            if (spendingCounter == 5) {
                console.log("You can't save the money.");
                console.log(daysPassed);
                break;
            }
        }
    }
}

vacation([2000, 1000, "spend", 1200, "save", 2000]);
vacation([110, 60, "spend", 10, "spend", 10, "spend", 10, "spend", 10, "spend", 10,]);
vacation([250, 150, "spend", 50, "spend", 50, "save", 100, "save", 100]);