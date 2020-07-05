function solve() {
    let infoField = document.querySelector("span.info");
    let departButton = document.querySelector("input#depart");
    let arriveButton = document.querySelector("input#arrive");

    let baseUrl = "https://judgetests.firebaseio.com/schedule/";
    let nextBusStop = "depot";
    let currentBusStop = ""

    function depart() {
        fetch(baseUrl + `${nextBusStop}.json`)
            .then((response) => (response.json()))
            .then((result) => showInfo(result));

        function showInfo(data) {
            infoField.textContent = `Next stop: ${data.name}`;
            nextBusStop = data.next;
            currentBusStop = data.name;
        }

        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    function arrive() {
        infoField.textContent = `Arriving at: ${currentBusStop}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();