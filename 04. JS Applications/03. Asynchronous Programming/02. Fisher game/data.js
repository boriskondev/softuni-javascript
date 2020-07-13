function host(endpoint) {
    return `https://fisher-game.firebaseio.com/${endpoint}.json`;
}

const api = {
    all: "catches",
    new: "catches",
    update: "catches/",
    delete: "catches/",
}

export async function listAllCatches() {
    const response = await fetch(host("catches"));
    //console.log("In data.js/all/response:");
    //console.log(response);
    const data = await response.json();
    //console.log("In data.js/all/data:");
    //console.log(data);
    return data;
}

export async function createNewCatch(newObj) {
    const response = await fetch(host("catches"), {
        method: "POST",
        body: JSON.stringify(newObj)
    });

    //console.log("In data.js/add/response:");
    //console.log(response);

    return response;
}

export async function updateCatch(id, updObj) {
    //console.log(host(`catches/${id}`))

    const response = await fetch(host(`catches/${id}`), {
        method: "PUT",
        body: JSON.stringify(updObj)
    });

    //console.log("In data.js/update/response:");
    //console.log(response);

    return response;
}

export async function deleteCatch(id) {
    //console.log(host(`catches/${id}`))

    const response = await fetch(host(`catches/${id}`), {
        method: "DELETE"
    });

    //console.log("In data.js/delete/response:");
    //console.log(response);

    return response;
}