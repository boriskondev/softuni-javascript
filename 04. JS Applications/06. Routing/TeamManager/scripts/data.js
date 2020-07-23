function host(endpoint) {
    const appId = "7B45CBE2-35CE-1C11-FFF7-C6CFB3A54A00"
    const restApiKey = "1F41C682-2341-4587-8B0A-69CC4C82734D"
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login"
}

export async function register(username, password) {
    return (await fetch(await host(endpoints.REGISTER), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();
}

function login(username, password) {

}