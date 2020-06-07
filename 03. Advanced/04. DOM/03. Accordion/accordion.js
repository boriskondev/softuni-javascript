function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let additionalContent = document.getElementById("extra");

    if (additionalContent.style.display === "none") {
        button.textContent = "Less";
        additionalContent.style.display = "block";
    } else {
        button.textContent = "More";
        additionalContent.style.display = "none";
    }
}