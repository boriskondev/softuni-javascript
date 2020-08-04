import {beginRequest, endRequest} from "../../../07. Workshop SPA/js/notification";

function host(endpoint) {
    return "https://api.backendless.com/D4197671-F8EB-2581-FF17-3244736FD100/B74150CD-0027-46F1-A534-07A1E6D19043/${endpoint}";
}

const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout"
};

// Първо в Backendless сменяме в схемата identity да е от name на username и трием email.
// В Postman подаваме обект с username и password, като долното работи успешно.
// Примерен response обект:
// {
//     "lastLogin": null,
//     "userStatus": "ENABLED",
//     "created": 1596541369000,
//     "___class": "Users",
//     "blUserLocale": "en",
//     "ownerId": "EE331262-FD5E-415C-BF56-364AE038E869",
//     "socialAccount": null,
//     "updated": null,
//     "objectId": "EE331262-FD5E-415C-BF56-364AE038E869",
//     "username": "Boris"
// }

// -------------------- REGISTER --------------------
export async function register(username, password) {

    const result = (await fetch(host(endpoints.REGISTER), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();

    return result;
}

// -------------------- LOGIN --------------------
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
    localStorage.setItem("username", result.username);
    localStorage.setItem("userId", result.objectId);

    return result;
}

// -------------------- LOGOUT --------------------
export async function logout() {

    const token = localStorage.getItem("userToken");

    localStorage.removeItem("userToken");

    const result = fetch(host(endpoints.LOGOUT), {
        method: "GET",
        headers: {
            "user-token": token
        }
    });

    return result;
}