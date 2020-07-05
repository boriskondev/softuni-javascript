function getInfo() {
    const busId = document.querySelector("#stopId");
    const stopName = document.querySelector("#stopName");
    const buses = document.querySelector("#buses");

    const baseUrl = "https://judgetests.firebaseio.com/businfo/";
    const validIds = ["1287", "1308", "1327", "2334"];

    const busIdValue = busId.value;

    if (!validIds.includes(busIdValue) || busIdValue === "") {
        stopName.textContent = "ERROR";
        buses.innerHTML = "";
        return;
    }

    const requestUrl = baseUrl + busIdValue + ".json";

    fetch(requestUrl)
        .then((response) => response.json())
        .then((result) => showInfo(result));

    function showInfo(data) {
        stopName.textContent = data.name;
        Object.keys(data.buses).forEach((bus) => {
            let listItem = document.createElement("li");
            listItem.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            buses.appendChild(listItem);
        })

    }
}