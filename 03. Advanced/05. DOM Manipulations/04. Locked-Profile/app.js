function lockedProfile() {
    let showMoreButtons = [...document.querySelectorAll("button")];
    showMoreButtons.forEach(b => b.addEventListener("click", onClick));

    function onClick(e) {
        let currentButton = e.target;
        let buttonParentNode = currentButton.parentNode;
        let unlock = [...buttonParentNode.querySelectorAll("input[type='radio']")][1];

        if (unlock.checked === true) {
            let hiddenField = currentButton.previousElementSibling;

            if (hiddenField.style.display === "") {
                hiddenField.style.display = "block";
                currentButton.textContent = "Hide it"
            } else {
                hiddenField.style.display = "";
                currentButton.textContent = "Show more"
            }
        } 
    }
}