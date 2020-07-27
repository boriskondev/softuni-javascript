function host(endpoint) {
    const appId = "7B45CBE2-35CE-1C11-FFF7-C6CFB3A54A00"
    const restApiKey = "1F41C682-2341-4587-8B0A-69CC4C82734D"
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

const endpoints = {
    REGISTER: "users/user",
    LOGIN: "users/login",
    LOGOUT: "users/logout"
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

export async function login(username, password) {
    return (await fetch(await host(endpoints.LOGIN), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: username,
            password
        })
    })).json();
}

export async function logout() {
    const token = localStorage.getItem("userToken");
    if (!token) {
        throw new Error("user is not logged in!")
    }

    return fetch(host(endpoints.LOGOUT), {
        method: "GET",
        headers: {
            "user-token": token
        }
    });
}