// localStorage.setItem("userToken", "A2C2A642-9C1C-4D36-A6B0-1C43CA71ABF2")

alert("It works!")

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
async function register(username, password) {
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

    localStorage.setItem("userToken", result["user-token"]);
    localStorage.setItem("username", result.username);
    localStorage.setItem("userId", result.objectId);

    return result;
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

// Get all movies
async function getMovies() {
    const token = localStorage.getItem("userToken");

    return (await fetch(host(endpoints.MOVIES), {
        headers: {
            "user-token": token
        }
    })).json();
}

// Get movie by ID
async function getMovieById(id) {
    const token = localStorage.getItem("userToken");

    return (await fetch(host(endpoints.MOVIE_BY_ID + id), {
        headers: {
            "user-token": token
        }
    })).json();
}

// Create movie
async function createMovie(movie) {
    const token = localStorage.getItem("userToken");

    return (await (fetch(host(endpoints.MOVIES), {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(movie)
    }))).json();
}

// Update movie
async function updateMovie(id, updatedProperties) {
    const token = localStorage.getItem("userToken");

    return (await (fetch(host(endpoints.MOVIE_BY_ID + id), {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(updatedProperties)
    }))).json();
}

// Delete movie
async function deleteMovie(id) {
    const token = localStorage.getItem("userToken");

    return (await (fetch(host(endpoints.MOVIE_BY_ID + id), {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "user-token": token
        }
    }))).json();
}

// Get movie by user ID
async function getMovieByOwner(ownerId) {
    const token = localStorage.getItem("userToken");

    return (await (fetch(host(endpoints.MOVIES + `?where=ownerId%3D%27${ownerId}%27`), {
        headers: {
            "content-type": "application/json",
            "user-token": token
        }
    }
    ))).json();
}

// Buy ticket
async function buyTicket(id) {
    const movie = await getMovieById(id);

    if (movie.tickets > 0) {
        const newTickets = movie.tickets -= 1;
        return updateMovie(id, {tickets: newTickets})
    }
}

// async function buyTicket(movie) {
//     const newTicket = movie.tickets - 1;
//     const movieId = movie.objectId;
//
//     return updateMovie(movieId, {tickets: newTickets})
// }