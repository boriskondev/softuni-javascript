import el from "./dom.js";
import * as data from "./data.js";

const symbols = {
    "Sunny": "&#x2600;",
    "Partly sunny": "&#x26C5;",
    "Overcast": "&#x2601;",
    "Rain": "&#x2614;",
    "Degrees": "&#176;"
}

window.addEventListener("load", () => {
    const input = document.querySelector("#location");
    const mainDiv = document.querySelector("#forecast");
    const todayDiv = document.querySelector("#current");
    const upcomingDiv = document.querySelector("#upcoming");

    document.querySelector("#submit").addEventListener("click", getForecast);

    async function getForecast() {

        const locationName = input.value.toLowerCase();
        const code = await data.getCodeAsync(locationName);

        if (code === undefined || code === "") {
            input.value = "Location not found! Try again.";
            if (mainDiv.style.display === "block") {
                mainDiv.style.display = "none";
            }
        } else {
            const today = await data.getTodayAsync(code);
            const upcoming = await data.getUpcomingAsync(code);

            const symbolSpan = el("span", "", {className: "condition symbol"});
            symbolSpan.innerHTML = symbols[today.forecast.condition];

            const tempSpan = el("span", "", {className: "forecast-data"});
            tempSpan.innerHTML = `${today.forecast.low}${symbols.Degrees}/${today.forecast.high}${symbols.Degrees}`;

            todayDiv.innerHTML = "";
            todayDiv.appendChild(el("div", [
                symbolSpan,
                el("span", [
                    el("span", today.name, {className: "forecast-data"}),
                    tempSpan,
                    el("span", today.forecast.condition, {className: "forecast-data"})
                ], {className: "condition"}),
            ], {className: "forecast"}));

            upcomingDiv.innerHTML = "";
            const forecastInfo = el("div", upcoming.forecast.map(renderUpcoming), {className: "forecast-info"});
            upcomingDiv.appendChild(forecastInfo);

            function renderUpcoming(forecast) {
                const symbolSpan = el("span", "", {className: "symbol"});
                symbolSpan.innerHTML = symbols[forecast.condition];

                const tempSpan = el("span", "", {className: "forecast-data"})
                tempSpan.innerHTML = `${today.forecast.low}${symbols.Degrees}/${today.forecast.high}${symbols.Degrees}`;

                const result = el("span", [
                    symbolSpan,
                    tempSpan,
                    el("span", forecast.condition, {className: "forecast-data"})
                ], {className: "upcoming"});

                mainDiv.style.display = "block";

                return result
            }
        }
    }
} );