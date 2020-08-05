// import { beginRequest, endRequest } from './notification.js';

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
    // beginRequest();

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

    // endRequest();

    return result;
}

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
    localStorage.setItem("username", result.username);
    localStorage.setItem("userId", result.objectId);

    // endRequest();

    return result;
}

export async function logout() {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    const result = fetch(host(endpoints.LOGOUT), {
        headers: {
            "user-token": token
        }
    });

    // endRequest();

    return result;
}

// get all events

export async function getEvents() {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS), {
        method: "GET",
        headers: {
            "user-token": token
        }
    })).json();

    // endRequest();

    return result;
}

// {
//     created: 1596579884000
//     description: "Cant wait!"
//     eventDate: "12 August 2020"
//     image: "https://townsquare.media/site/366/files/2018/10/metallica_by_Ross_Halfin.jpg"
//     interestedIn: 0
//     name: "Metallica in Sofia!"
//     objectId: "3FFAC9D1-BAE2-4BAB-A7DD-B56B7F60DABD"
//     organizedBy: "BorisKondev"
//     ownerId: "16E6B8F9-9624-473A-8179-640A88390796"
//     updated: null
//     ___class: "events"
// }

// create event
export async function createEvent(event) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(event)
    })).json();

    // endRequest();

    return result;
}

// get event by ID
export async function getEventById(id) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.EVENTS + "/" + id), {
        method: "GET",
        headers: {
            "user-token": token
        }
    })).json();

    // endRequest();

    return result;
}


//
// // edit movie
// export async function updateMovie(id, updatedProps) {
//     beginRequest();
//
//     const token = localStorage.getItem('userToken');
//
//     const result = (await fetch(host(endpoints.MOVIE_BY_ID + id), {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'user-token': token
//         },
//         body: JSON.stringify(updatedProps)
//     })).json();
//
//     endRequest();
//
//     return result;
// }
//
// // delete movie
// export async function deleteMovie(id) {
//     beginRequest();
//
//     const token = localStorage.getItem('userToken');
//
//     const result = (await fetch(host(endpoints.MOVIE_BY_ID + id), {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'user-token': token
//         }
//     })).json();
//
//     endRequest();
//
//     return result;
// }
//
// // get movies by user ID
// export async function getMovieByOwner() {
//     beginRequest();
//
//     const token = localStorage.getItem('userToken');
//     const ownerId = localStorage.getItem('userId');
//
//     const result = (await fetch(host(endpoints.MOVIES + `?where=ownerId%3D%27${ownerId}%27`), {
//         headers: {
//             'Content-Type': 'application/json',
//             'user-token': token
//         }
//     })).json();
//
//     endRequest();
//
//     return result;
// }
//
// // buy ticket
// export async function buyTicket(movie) {
//     const newTickets = movie.tickets - 1;
//     const movieId = movie.objectId;
//
//     return updateMovie(movieId, { tickets: newTickets });
// }
