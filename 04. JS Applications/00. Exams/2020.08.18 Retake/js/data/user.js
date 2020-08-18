import { host, endpoints } from "../../settings.js"

// ------------------------- REGISTER -------------------------
export async function register(email, password) {

    const result = (await fetch(host(endpoints.REGISTER), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })).json();

    return result;
}

// ------------------------- LOGIN -------------------------
export async function login(username, password) {

    const result = await (await fetch(host(endpoints.LOGIN), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: username,
            password
        })
    })).json();

    localStorage.setItem("userToken", result["user-token"]);
    localStorage.setItem("userEmail", result.email);
    localStorage.setItem("userId", result.objectId);

    return result;
}

// ------------------------- LOGOUT -------------------------
export async function logout() {

    const token = localStorage.getItem("userToken");

    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");

    const result = fetch(host(endpoints.LOGOUT), {
        headers: {
            "user-token": token
        }
    });

    return result;
}
