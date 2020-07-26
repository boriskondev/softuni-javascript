alert("It works!")

function host(endpoint) {
    const appId = "6F95DCA6-BD2A-08A2-FFD0-D420775B3800";
    const restApiKey = "68D97447-D153-42DF-BE47-A75B8E6C42D6";
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout"
}

// Register new user
async function register(username, password) {
    return (await fetch(host(endpoints.REGISTER), {
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

// Login registered user
async function login(username, password) {
    return (await fetch(host(endpoints.LOGIN), {
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

// Logout registered user
async function logout() {
    const token = localStorage.getItem("userToken");

    return (await fetch(host(endpoints.LOGOUT), {
        method: "GET",
        headers: {
            "user-token": token
        }
    }));
}