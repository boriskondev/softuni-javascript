function tradeCommissions(city, num) {
    let sales = Number(num);
    let percentage = 0;
    let total = 0;
    let error = false;
    if (sales >= 0 && sales <= 500) {
        if (city == "Sofia") {
            percentage = 5;
        } else if (city == "Varna") {
            percentage = 4.5;
        } else if (city == "Plovdiv") {
            percentage = 5.5;
        } else {
            error = true;
        }
    } else if (sales > 500 && sales <= 1000) {
        if (city == "Sofia") {
            percentage = 7;
        } else if (city == "Varna") {
            percentage = 7.5;
        } else if (city == "Plovdiv") {
            percentage = 8;
        } else {
            error = true;
        }
    } else if (sales > 1000 && sales <= 10000) {
        if (city == "Sofia") {
            percentage = 8;
        } else if (city == "Varna") {
            percentage = 10;
        } else if (city == "Plovdiv") {
            percentage = 12;
        } else {
            error = true;
        } 
    } else if (sales > 10000) {
        if (city == "Sofia") {
            percentage = 12;
        } else if (city == "Varna") {
            percentage = 13;
        } else if (city == "Plovdiv") {
            percentage = 14.5;
        } else {
            error = true;
        }
    } else {
        error = true;
    }

    if (error) {
        console.log("error");
    } else {
        total = sales * percentage / 100;
        console.log(total.toFixed(2))
    }
}

tradeCommissions("Sofia", 1500);
tradeCommissions("Plovdiv", 499.99);
tradeCommissions("Varna", 3874.50);
tradeCommissions("Kaspichan", -50);