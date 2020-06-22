class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customerObj) {
        let customerFound = this.allCustomers.filter(customer => customer.personalId === customerObj.personalId);
        if (customerFound.length === 0) {
            customerObj["transactions"] = []
            this.allCustomers.push(customerObj);
            return customerObj
        } else {
            throw new Error(`${customerObj.firstName} ${customerObj.lastName} is already our customer!`);
        }
    }

    depositMoney(personalId, amount) {
        let customerFound = this.allCustomers.filter(customer => customer.personalId === personalId);
        if (customerFound.length === 0) {
            throw new Error("We have no customer with this ID!");
        } else {
            customerFound = customerFound[0];
            if (customerFound.hasOwnProperty("totalMoney")) {
                customerFound["totalMoney"] += amount;
            } else {
                customerFound["totalMoney"] = amount;
            }
            customerFound["transactions"].push(["made deposit of", amount])
            return `${customerFound.totalMoney}$`
        }
    }

    withdrawMoney(personalId, amount) {
        let customerFound = this.allCustomers.filter(customer => customer.personalId === personalId);
        if (customerFound.length === 0) {
            throw new Error("We have no customer with this ID!");
        }
        customerFound = customerFound[0];
        if (customerFound.totalMoney < amount) {
            throw new Error(`“${customerFound[0].firstName} ${customerFound[0].lastName} does not have enough money to withdraw that amount!”`);
        } else {
            customerFound.totalMoney -= amount;
            customerFound["transactions"].push(["withdrew", amount])
            return `${customerFound.totalMoney}$`
        }
    }

    customerInfo(personalId) {
        let result = ""
        let customerFound = this.allCustomers.filter(customer => customer.personalId === personalId);
        if (customerFound.length === 0) {
            throw new Error("We have no customer with this ID!");
        } else {
            customerFound = customerFound[0];
            result = `Bank name: ${this._bankName}`;
            result += `\nCustomer name: ${customerFound.firstName} ${customerFound.lastName}`;
            result += `\nCustomer ID: ${customerFound.personalId}`;
            result += `\nTotal Money: ${customerFound.totalMoney}$`;
            result += "\nTransactions:";
            let transNum = customerFound["transactions"].length;
            for (let transaction of customerFound["transactions"].reverse()) {
                result += `\n${transNum}. ${customerFound.firstName} ${customerFound.lastName} ${transaction[0]} ${transaction[1]}$!`
                transNum --;
            }
        }
        return result
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

