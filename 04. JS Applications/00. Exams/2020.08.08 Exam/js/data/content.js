import { host, endpoints } from "./settings.js"

// ------------------------- GET ALL -------------------------
export async function getAll(search) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    let result;

    if (!search) {
        result = (await fetch(host(endpoints.MOVIES), {
            headers: {
                "user-token": token
            }
        })).json();
    } else {
        result = (await fetch(host(endpoints.MOVIES + `?where=${escape(`title LIKE '%${search}%'`)}`), {
            headers: {
                "user-token": token
            }
        })).json();
    }

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

// ------------------------- Like -------------------------
export async function likeIt(movie, email) {
    movie.peopleLiked.push(email);

    const result = await updateById(movie.objectId, { peopleLiked: movie.peopleLiked })
    console.log(result)
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
