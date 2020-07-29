import {showError, showInfo} from "../notifications.js";
import { createMovie } from "../data.js"

export default async function catalog() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/movie/catalog.hbs", this.app.userData);
}

export async function details() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/movie/details.hbs", this.app.userData);
}

export async function create() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/movie/create.hbs", this.app.userData);
}

export async function createPost() {
    try {
        if (this.params.title === "") {
            throw new Error("Title is required!");
        }

        const movie = {
            title: this.params.title,
            image: this.params.imageUrl,
            description: this.params.description,
            genres: this.params.genres,
            tickets: Number(this.params.tickets)
        }

        const result = await createMovie(movie);

        if (result.hasOwnProperty("errorData")) {
            let error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showInfo("Movie created successfully.");

        this.redirect("#/details/:" + result.objectId);
    }
    catch (err) {
        showError(err.message);
    }
}

export async function edit() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/movie/edit.hbs", this.app.userData);
}