function attachEvents() {
    const loadButton = document.querySelector("#btnLoad");
    const createButton = document.querySelector("#btnCreate");

    const personId = document.querySelector("#person");
    const personPhone = document.querySelector("#phone");

    const phonebook = document.querySelector("#phonebook");

    createButton.addEventListener("click", () => {
        if (personId.value !== "" && personPhone.value !== "") {
            fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify({person: personId.value, phone: personPhone.value})
            })
            personId.value = "";
            personPhone.value = "";
        }
    });

    let baseUrl = "https://phonebook-nakov.firebaseio.com/phonebook.json"

    loadButton.addEventListener("click", () => {
        fetch(baseUrl)
            .then((response) => (response.json()))
            .then((result) => (createLiElement(result)));
    });

    function createLiElement(result) {
        phonebook.innerHTML = "";
        if (result === null) {
            let listItem = document.createElement("li");
            listItem.setAttribute("id", "phonebook");
            listItem.textContent = "No result/s found!";
            listItem.appendChild(liButton);
            phonebook.appendChild(listItem);
        } else {
            for (let key of Object.keys(result)) {
                let listItem = document.createElement("li");
                listItem.setAttribute("id", "phonebook");
                listItem.textContent = `${result[key].person}: ${result[key].phone}`
                let liButton = document.createElement("button");
                liButton.textContent = "Delete";
                liButton.addEventListener("click", () => {
                    listItem.remove();
                    // DELETE REQUEST https://github.com/github/fetch/issues/154
                })
                listItem.appendChild(liButton);
                phonebook.appendChild(listItem);
            }
        }
    }
}

attachEvents();