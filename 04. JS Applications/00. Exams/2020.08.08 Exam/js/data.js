// import { beginRequest, endRequest } from "./notifications.js";

function host(endpoint) {
    const appId = "C8CFFE68-DC8B-F904-FFBC-6C9990D8C800"
    const restApiKey = "C9F744E5-D3DC-47B4-B69F-B58450812FFF"
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout",
    MOVIES: "data/movies"
};

// ------------------------- REGISTER -------------------------
export async function register(email, password) {
    // beginRequest();

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

    // endRequest();

    return result;
}

// ------------------------- LOGIN -------------------------
export async function login(username, password) {
    // beginRequest();

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

    // endRequest();

    return result;
}

// ------------------------- LOGOUT -------------------------
export async function logout() {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");

    const result = fetch(host(endpoints.LOGOUT), {
        headers: {
            "user-token": token
        }
    });

    // endRequest();

    return result;
}

// ------------------------- ADD NEW -------------------------
export async function addNew(movie) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.MOVIES), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(movie)
    })).json();

    // endRequest();

    return result;
}

// ------------------------- GET ALL -------------------------
export async function getAll() {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.MOVIES), {
        method: "GET",
        headers: {
            "user-token": token
        }
    })).json();

    // endRequest();

    return result;
}

// ------------------------- GET BY ID -------------------------
export async function getById(id) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.MOVIES + "/" + id), {
        method: "GET",
        headers: {
            "user-token": token
        }
    })).json();

    // endRequest();

    return result;
}

// ------------------------- UPDATE -------------------------
export async function updateById(id, updatedProps) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.MOVIES + "/" + id), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(updatedProps)
    })).json();

    // endRequest();

    return result;
}

// ------------------------- DELETE -------------------------
export async function deleteIt(id) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.MOVIES + "/" + id), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        }
    })).json();

    // endRequest();

    return result;
}
//
// // ------------------------- GET ALL BY USER ID -------------------------
// export async function getEventsByCreator() {
//     beginRequest();
//
//     const token = localStorage.getItem("userToken");
//     const ownerId = localStorage.getItem("userId");
//
//     const result = (await fetch(host(endpoints.EVENTS + `?where=ownerId%3D%27${ownerId}%27`), {
//         headers: {
//             "Content-Type": "application/json",
//             "user-token": token
//         }
//     })).json();
//
//     endRequest();
//
//     return result;
// }
//
// // ------------------------- INCREASE SOMETHING IN OBJECT -------------------------
// export async function joinIt(event) {
//     const eventId = event.objectId;
//     event.interestedIn++;
//
//     const result = await updateById(eventId, { interestedIn: event.interestedIn })
//     return result;
// }