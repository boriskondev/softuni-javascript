// 01:55:41

function host(endpoint) {
    return `https://judgetests.firebaseio.com/${endpoint}.json`;
}

const api = {
    locations: "locations",
    today: "forecast/today",
    upcoming: "forecast/upcoming",
};

export async function getCodeAsync(name) {
    //const response1 = fetch(host(api.locations));
    // Returns Promise;
    //const response2 = await (fetch(host(api.locations)));
    // Returns Response;

    const data = await (await fetch(host(api.locations))).json();

    return data.find(x => x.name.toLowerCase() === name.toLowerCase()).code;
}

export async function getTodayAsync(code) {
    return await (await fetch(host(api.today + code))).json();
}

export async function getUpcomingAsync() {
    return await (await fetch(host(api.upcoming + code))).json();
}