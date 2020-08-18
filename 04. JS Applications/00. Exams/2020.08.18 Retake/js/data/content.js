import { host, endpoints } from "../../settings.js"

// ------------------------- GET ALL -------------------------
export async function getAll() {

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.SHOES), {
        headers: {
            "user-token": token
        }
    })).json();

    return result;
}

// ------------------------- ADD NEW -------------------------
export async function addNew(shoe) {

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.SHOES), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(shoe)
    })).json();

    return result;
}

// ------------------------- GET BY ID -------------------------
export async function getById(id) {

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.SHOES + "/" + id), {
        method: "GET",
        headers: {
            "user-token": token
        }
    })).json();

    return result;
}

// ------------------------- UPDATE -------------------------
export async function updateById(id, updatedProps) {

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.SHOES + "/" + id), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        },
        body: JSON.stringify(updatedProps)
    })).json();

    return result;
}

// ------------------------- DELETE -------------------------
export async function deleteIt(id) {
    // beginRequest();

    const token = localStorage.getItem("userToken");

    const result = (await fetch(host(endpoints.SHOES + "/" + id), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "user-token": token
        }
    })).json();

    // endRequest();

    return result;
}

// ------------------------- Buy -------------------------
export async function buyIt(shoe, email) {
    shoe.peopleBought.push(email);

    const result = await updateById(shoe.objectId, { peopleBought: shoe.peopleBought })

    return result;
}
//
// //
// // // ------------------------- GET ALL BY USER ID -------------------------
// // export async function getEventsByCreator() {
// //     beginRequest();
// //
// //     const token = localStorage.getItem("userToken");
// //     const ownerId = localStorage.getItem("userId");
// //
// //     const result = (await fetch(host(endpoints.EVENTS + `?where=ownerId%3D%27${ownerId}%27`), {
// //         headers: {
// //             "Content-Type": "application/json",
// //             "user-token": token
// //         }
// //     })).json();
// //
// //     endRequest();
// //
// //     return result;
// // }
// //
