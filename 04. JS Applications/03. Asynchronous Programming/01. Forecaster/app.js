import el from "./dom.js";
import * as data from "./data.js";

// async казва "Тази функция е асинхронна и ще върне Promise;
// await казва "Вземи резултата от Promise-a, когато е готов;

const symbols = {
    "Sunny": "&#x2600;",
    "Partly sunny": "&#x26C5;",
    "Overcast": "&#x2601;",
    "Rain": "&#x2614;",
    "Degrees": "&#176;"
}

window.addEventListener("load", () => {
    console.log(1)
    const input = document.querySelector("#location");
    const mainDiv = document.querySelector("#forecast");
    const todayDiv = document.querySelector("#current");
    const upcomingDiv = document.querySelector("#upcoming");

    document.querySelector("#submit").addEventListener("click", getForecast);

    async function getForecast() {
        mainDiv.style.display = "";

        const locationName = input.value;
        const code = await data.getCodeAsync(locationName);

        const todayRes = data.getTodayAsync(code);
        const upcomingRes = data.getUpcomingAsync(code);

        const [today, upcoming] = [ await todayRes, await upcomingRes ];

        const symbolSpan = el("span", "", {className: "condition symbol"});
        symbolSpan.innerHTML = symbols[today.forecast.condition];

        const tempSpan = el("span", "", {className: "forecast-data"});
        tempSpan.innerHTML = `${today.forecast.low}${symbols.Degrees}/${today.forecast.high}${symbols.Degrees}`;

        todayDiv.appendChild(el("div", [
            symbolSpan,
            el("span", [
                el("span", today.name, {className: "forecast-data"}),
                tempSpan,
                el("span", today.forecast.condition, {className: "forecast-data"})
                ], {className: "condition"}),
        ], {className: "forecast"}));

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

            return result
        }
        mainDiv.style.display = "block";
    }
} );