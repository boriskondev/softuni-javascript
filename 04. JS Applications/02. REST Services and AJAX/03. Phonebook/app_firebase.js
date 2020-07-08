function attachEvents() {
    const loadButton = document.querySelector("#btnLoad");
    const createButton = document.querySelector("#btnCreate");

    const personId = document.querySelector("#person");
    const personPhone = document.querySelector("#phone");

    const phonebook = document.querySelector("#phonebook");

    let baseUrl = "https://phonebook-nakov.firebaseio.com/phonebook"

    createButton.addEventListener("click", () => {
        if (personId.value !== "" && personPhone.value !== "") {
            fetch(baseUrl + ".json", {
                method: "POST",
                body: JSON.stringify({person: personId.value, phone: personPhone.value})
            })
            personId.value = "";
            personPhone.value = "";
            window.confirm("Contact created!");
        }
    });

    loadButton.addEventListener("click", () => {
        fetch(baseUrl + ".json")
            .then((response) => (response.json()))
            .then((result) => (createLiElement(result)));
    });

    function createLiElement(result) {
        phonebook.innerHTML = "";
        if (result === null) {
            let listItem = document.createElement("li");
            listItem.setAttribute("id", "phonebook");
            listItem.textContent = "No result/s found!";
            phonebook.appendChild(listItem);
        } else {
            for (let key of Object.keys(result)) {
                let id = key;
                let listItem = document.createElement("li");
                let liButton = document.createElement("button");
                listItem.setAttribute("id", "phonebook");
                listItem.textContent = `${result[key].person}: ${result[key].phone}`
                liButton.textContent = "Delete";
                liButton.addEventListener("click", (e) => {
                    e.preventDefault()
                    fetch(baseUrl + "/" + id + ".json", {
                        method: "DELETE"
                    })
                    listItem.remove();
                })
                listItem.appendChild(liButton);
                phonebook.appendChild(listItem);
            }
        }
    }
}

attachEvents();