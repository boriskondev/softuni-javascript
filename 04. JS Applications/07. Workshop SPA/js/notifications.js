const elements = {
    info: document.querySelector("#infoBox"),
    error: document.querySelector("#errorBox"),
    loading: document.querySelector("#loadingBox")
};

elements.info.addEventListener("click", hideInfo);
elements.error.addEventListener("click", hideError);

export function showInfo(message) {
    elements.info.children[0].textContent = message;
    elements.info.style.display = "block";

    setTimeout(hideInfo, 3000);
}

export function hideInfo() {
    elements.info.style.display = "";
}

export function showError(message) {
    elements.error.children[0].textContent = message;
    elements.error.style.display = "block";
}


export function hideError() {
    elements.error.style.display = "";
}

let requests = 0;

export function showLoading() {
    requests ++;
    elements.loading.style.display = "block";
}

export function hideLoading() {
    requests --;
    if (requests === 0) {
        elements.loading.style.display = "";
    }
}