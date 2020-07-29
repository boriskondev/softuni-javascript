import {showError, showInfo} from "../notifications.js";
import { createMovie, getMovies, buyTicket as apiBuyTicket } from "../data.js"

export default async function catalog() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
        movie: await this.load("./templates/movie/movie.hbs")
    };

    try {
        const result = await getMovies();

        if (result.hasOwnProperty("errorData")) {
            let error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.movies = result;

        this.partial("./templates/movie/catalog.hbs", this.app.userData);

        showInfo("Showing catalog.");

    } catch (err) {
        showError(err.message);
    }

}

export async function details() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
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
            image: this.params.image,
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

        this.redirect("#/catalog");
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

export async function buyTicket() {
    const movieId = this.params.id;

    const movie = this.app.userData.movies.find(m => m.objectId === movieId);

    try {
        const result = await apiBuyTicket(movie);

        if (result.hasOwnProperty("errorData")) {
            let error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showInfo(`Bought ticket for ${movie.title}`);
        this.redirect("#/catalog");

    } catch (err) {
        showError(err.message);
    }
}