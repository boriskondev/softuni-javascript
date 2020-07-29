import {showLoading, hideLoading} from "./notifications.js"

function host(endpoint) {
    const appId = "6F95DCA6-BD2A-08A2-FFD0-D420775B3800";
    const restApiKey = "68D97447-D153-42DF-BE47-A75B8E6C42D6";
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout",
    MOVIES: "data/movies",
    MOVIE_BY_ID: "data/movies/",
}

// Register new user
export async function register(username, password) {
    showLoading();
    const result = await (await fetch(host(endpoints.REGISTER), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();

    hideLoading();

    return result;
}

// Login registered user
export async function login(username, password) {
    showLoading();

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

    hideLoading();

    return result;
}

// Logout registered user
export async function logout() {
    showLoading();

    const token = localStorage.getItem("userToken");

    localStorage.removeItem("userToken");

    const result = (await fetch(host(endpoints.LOGOUT), {
        method: "GET",
        headers: {
            "user-token": token
        }
    }));

    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    hideLoading();

    return result;
}

// Get all movies
export async function getMovies() {
    showLoading();
    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.MOVIES), {
        headers: {
            "user-token": token
        }
    })).json();

    hideLoading();

    return result;
}

// Get movie by ID
export async function getMovieById(id) {
    showLoading();
    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.MOVIE_BY_ID + id), {
        headers: {
            "user-token": token
        }
    })).json();

    hideLoading();

    return result;
}

// Create movie
export async function createMovie(movie) {
    showLoading();
    const token = localStorage.getItem("userToken");

    const result = (await (fetch(host(endpoints.MOVIES), {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(movie)
    }))).json();

    hideLoading();

    return result;
}

// Update movie
export async function updateMovie(id, updatedProperties) {
    showLoading();
    const token = localStorage.getItem("userToken");

    const result = (await (fetch(host(endpoints.MOVIE_BY_ID + id), {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(updatedProperties)
    }))).json();

    hideLoading();

    return result;
}

// Delete movie
export async function deleteMovie(id) {
    showLoading();
    const token = localStorage.getItem("userToken");

    const result = (await (fetch(host(endpoints.MOVIE_BY_ID + id), {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "user-token": token
        }
    }))).json();

    hideLoading();

    return result;
}

// Get movie by user ID
export async function getMovieByOwner(ownerId) {
    showLoading();
    const token = localStorage.getItem("userToken");

    const result = (await (fetch(host(endpoints.MOVIES + `?where=ownerId%3D%27${ownerId}%27`), {
        headers: {
            "content-type": "application/json",
            "user-token": token
        }
    }
    ))).json();

    hideLoading();

    return result;
}

// Buy ticket
export async function buyTicket(movie) {
    const newTickets = movie.tickets - 1;
    const movieId = movie.objectId;

    return updateMovie(movieId, {tickets: newTickets})
}