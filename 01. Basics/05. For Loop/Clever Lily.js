function cleverLily(age, price, toy) {
    let lilyAge = Number(age);
    let washingMachinePrice = Number(price);
    let toyPrice = Number(toy);
    let num = 1;
    let moneyCounter = 0;
    let money = 0;
    let toysCounter = 0;
    let toysMoney = 0;
    for (num; num <= lilyAge; num++) {
        if (num % 2 == 0) {
            moneyCounter += 1;
            money += moneyCounter * 10;
            money -= 1;
        } else if (num % 2 != 0) {
            toysCounter += 1;
        }
    }
    let total = 0;
    total = money + (toysCounter * toyPrice);
    if (total >= washingMachinePrice) {
        console.log(`Yes! ${(total-washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice-total).toFixed(2)}`)
    }
}

cleverLily(10, 170, 6);
cleverLily(21, 1570.98, 3);