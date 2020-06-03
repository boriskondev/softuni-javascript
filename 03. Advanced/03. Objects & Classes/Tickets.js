function solve(arr, sortBy) {
    let ticketsArr = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        let [destination, price, status] = arr[i].split("|");
        price = Number(price);
        ticketsArr.push(new Ticket(destination, price, status));
    }

    if (sortBy != "price") {
        ticketsArr.sort((a, b) => {return a[sortBy].localeCompare(b[sortBy])});
    } else {
        ticketsArr.sort((a, b) => {return a[sortBy] - b[sortBy]});
    }

    return ticketsArr
}

solve(['Philadelphia|94.20|available',
'Philadelphia|200|available',
'Philadelphia|100|available'],
'price')