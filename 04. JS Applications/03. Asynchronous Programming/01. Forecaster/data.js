function host(endpoint) {
    return `https://judgetests.firebaseio.com/${endpoint}.json`;
}

const api = {
    locations: "locations",
    today: "forecast/today/",
    upcoming: "forecast/upcoming/",
};

export async function getCodeAsync(name) {
    const data = await (await fetch(host(api.locations))).json();

    let result = "";

    try {
        result = data.find(x => x.name.toLowerCase() === name.toLowerCase()).code;
    } catch (e) {
        console.log(e);
    }

    return result
}

export async function getTodayAsync(code) {
    let response = await (fetch(host(api.today + code)));
    return await (response.json());
}

export async function getUpcomingAsync(code) {
    let response = await fetch(host(api.upcoming + code))
    return await response.json();
}