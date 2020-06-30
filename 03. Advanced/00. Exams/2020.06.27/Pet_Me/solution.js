function solve() {

    // References
    let addNewPetSection = document.querySelectorAll("#container input");

    let nameField = addNewPetSection.item(0);
    let ageField = addNewPetSection.item(1);
    let kindField = addNewPetSection.item(2);
    let currentOwnerField = addNewPetSection.item(3);

    let addButton = document.querySelector("button");
    addButton.addEventListener("click", onClick);

    let adoptionSectionUl = document.querySelector("#adoption ul");
    let adoptedSectionUl = document.querySelector("#adopted ul");

    function onClick(event) {
        event.preventDefault();

        if (nameField.value !== "" && ageField.value !== "" && !isNaN(ageField.value) &&
            kindField.value !== "" && currentOwnerField.value !== "") {

            // Create new li element
            let newLi = document.createElement("li");

            // New li element paragraph
            let newLiContent =
                `<p>
                    <strong>${nameField.value}</strong> is a
                    <strong>${ageField.value}</strong> years old 
                    <strong>${kindField.value}</strong>
                </p>`
            newLi.innerHTML = newLiContent;

            // New li element span
            let petOwner = document.createElement("span");
            petOwner.textContent = `Owner: ${currentOwnerField.value}`;
            newLi.appendChild(petOwner);

            // New li element button
            let newButton= document.createElement("button");
            newButton.textContent = "Contact with owner";
            newLi.appendChild(newButton);

            adoptionSectionUl.appendChild(newLi);

            // Clear fields
            nameField.value = ""
            ageField.value = ""
            kindField.value = ""
            currentOwnerField.value = ""

            // Button listener logic
            newButton.addEventListener("click", () => {

                // "Contact with owner" button
                if (newButton.textContent === "Contact with owner") {

                    // Div with input field and button

                    // Div element
                    let newDiv = document.createElement("div");

                    // Input element
                    let inputField = document.createElement("input");
                    inputField.placeholder = "Enter your name";
                    newDiv.append(inputField);

                    // Button name change
                    newButton.textContent = "Yes! I take it!";
                    newDiv.append(newButton);

                    newLi.appendChild(newDiv);

                    // "Yes! I take it!" button
                } else if (newButton.textContent === "Yes! I take it!") {

                    let inputField = newButton.parentNode.querySelector("input");

                    if (inputField.value !== "") {
                        petOwner.textContent = `New owner: ${inputField.value}`;
                        newButton.textContent = "Checked";
                        inputField.parentNode.remove();

                        newLi.appendChild(petOwner)
                        newLi.appendChild(newButton)
                        adoptedSectionUl.appendChild(newLi)
                    }
                } else if (newButton.textContent === "Checked"){
                    newLi.remove()
                }
            });
        }
    }
}

