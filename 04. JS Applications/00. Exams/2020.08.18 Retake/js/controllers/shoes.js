import { addNew } from "../data/content.js";
import { getById } from "../data/content.js";
import { updateById, deleteIt, buyIt } from "../data/content.js";


// ------------------------- ADD -------------------------
export async function add() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/shoes/add.hbs", this.app.userData);
}

// ------------------------- ADD (POST) -------------------------
export async function addPost() {
    try {
        if (this.params.name.length === 0 ||
            this.params.price.length === 0 ||
            this.params.imageUrl.length === 0 ||
            this.params.description.length === 0 ||
            this.params.brand.length === 0) {
            throw new Error("One of more fields are empty");
        }

        const shoe = {
            name: this.params.name,
            price: this.params.price,
            image: this.params.imageUrl,
            description: this.params.description,
            brand: this.params.brand,
            creator: this.app.userData.userEmail,
            peopleBought: []
        }

        const result = await addNew(shoe);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        alert("Created successfully!");

        this.redirect("#/home");

    } catch (err) {
        alert(err.message);
    }
}

// ------------------------- DETAILS -------------------------
export async function shoeDetails() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const shoeId = this.params.id;

    let shoe = await getById(shoeId);

    const context = Object.assign(this.app.userData, { shoe })

    if (shoe.creator === this.app.userData.userEmail) {
        context.shoe.isCreator = true;
    } else {
        context.shoe.isCreator = false;
        let result = shoe.peopleBought.filter(email => email === this.app.userData.userEmail);
        if (result.length > 0) {
            context.shoe.alreadyBought = true;
        } else {
            context.shoe.alreadyBought = false;
        }
    }

    this.partial("./templates/shoes/shoeDetails.hbs", context);
}

// ------------------------- EDIT -------------------------
export async function edit() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const shoeId = this.params.id;

    let shoe = await getById(shoeId);

    const context = Object.assign(this.app.userData, { shoe });

    this.partial("./templates/shoes/edit.hbs", context);

}

// ------------------------- EDIT (POST) -------------------------
export async function editPost() {

    const shoeId = this.params.id;

    try {
        if (this.params.name.length === 0 ||
            this.params.price.length === 0 ||
            this.params.imageUrl.length === 0 ||
            this.params.description.length === 0 ||
            this.params.brand.length === 0) {
            throw new Error("One of more fields are empty");
        }

        const shoe = {
            name: this.params.name,
            price: this.params.price,
            image: this.params.imageUrl,
            description: this.params.description,
            brand: this.params.brand,
        }

        const result = await updateById(shoeId, shoe);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        alert("Edited successfully.");

        this.redirect("#/home");

    } catch (err) {
        alert(err.message);
    }
}

// ------------------------- DELETE -------------------------
export async function deleteGet() {
    if (confirm("Are you sure you want to delete this shoe?") === false) {
        return this.redirect("#/home");
    }

    const shoeId = this.params.id;

    try {
        const result = await deleteIt(shoeId);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        alert("Deleted successfully");

        this.redirect("#/home");

    } catch (err) {
        alert(err.message);
    }
}

// ------------------------- BUY -------------------------
export async function buy() {
    const shoeId = this.params.id;

    let shoe = await getById(shoeId);

    let email = this.app.userData.userEmail;

    try {
        const result = await buyIt(shoe, email);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        alert("You bought the shoe successfully.");

        this.redirect(`#/details/${shoeId}`);

    } catch (err) {
        alert(err.message);
    }
}