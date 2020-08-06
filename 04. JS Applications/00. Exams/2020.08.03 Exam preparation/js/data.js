import { beginRequest, endRequest } from "./notifications.js";

function host(endpoint) {
    return `https://api.backendless.com/D4197671-F8EB-2581-FF17-3244736FD100/981D4390-9981-4062-BA1B-D147383261C9/${endpoint}`;
}

const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout",
    EVENTS: "data/events"
};

export async function register(username, password) {
    beginRequest();

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

    endRequest();

    return result;
}

export async function login(username, password) {
    beginRequest();

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

    endRequest();

    return result;
}

export async function logout() {
    beginRequest();

    const token = localStorage.getItem("userToken");

    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    const result = fetch(host(endpoints.LOGOUT), {
        headers: {
            "user-token": token
        }
    });

    endRequest();

    return result;
}

// get all events

export async function getEvents() {
    beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS), {
        method: "GET",
        headers: {
            "user-token": token
        }
    })).json();

    endRequest();

    return result;
}

// create event
export async function createEvent(event) {
    beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(event)
    })).json();

    endRequest();

    return result;
}

// get event by ID
export async function getEventById(id) {
    beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS + "/" + id), {
        method: "GET",
        headers: {
            "user-token": token
        }
    })).json();

    endRequest();

    return result;
}

// Update event
export async function updateEvent(id, updatedProps) {
    beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS + "/" + id), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(updatedProps)
    })).json();

    endRequest();

    return result;
}

// Delete event
export async function deleteEvent(id) {
    beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS + "/" + id), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        }
    })).json();

    endRequest();

    return result;
}

// Join event
export async function joinEvent(event) {
    const eventId = event.objectId;
    event.interestedIn++;

    const result = await updateEvent(eventId, { interestedIn: event.interestedIn })
    console.log(result)
    return result;
}

// Get events by user ID
export async function getEventsByCreator() {
    beginRequest();

    const token = localStorage.getItem("userToken");
    const ownerId = localStorage.getItem("userId");

    const result = (await fetch(host(endpoints.EVENTS + `?where=ownerId%3D%27${ownerId}%27`), {
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        }
    })).json();

    endRequest();

    return result;
}
