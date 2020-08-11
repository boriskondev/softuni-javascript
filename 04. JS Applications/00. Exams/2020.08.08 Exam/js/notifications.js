export function showSuccess(message) {
    let success = document.querySelectorAll(".notifications")[0];
    success.firstElementChild.textContent = message
    success.style.display = "block";

    setTimeout((hideSuccess), 3000);

    function hideSuccess() {
        success.style.display = "none";
    }
}

export function showError(message) {
    let error = document.querySelectorAll(".notifications")[1];
    error.firstElementChild.textContent = message
    error.style.display = "block";

    setTimeout((hideError), 3000);

    function hideError() {
        error.style.display = "none";
    }
}

// let requests = 0;

// export function beginRequest() {
//     let loading = document.querySelector("#loadingBox");
//     if (loading !== null) {
//         requests++;
//         loading.style.display = "block";
//     }
// }
//
// export function endRequest() {
//     let loading = document.querySelector("#loadingBox");
//     requests--;
//     if (loading !== null) {
//         if (requests === 0) {
//             loading.style.display = "none";
//         }
//     }
// }



