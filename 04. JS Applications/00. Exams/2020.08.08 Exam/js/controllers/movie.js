import { showSuccess, showError } from "../notifications.js";
import { addNew } from "../data/content.js";
import { getById, updateById, deleteIt, likeIt } from "../data/content.js";

// ------------------------- ADD -------------------------
export async function add() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/movie/add.hbs", this.app.userData);
}

// ------------------------- ADD (POST) -------------------------
export async function addPost() {
    try {
        if (this.params.title.length === 0 ||
            this.params.description.length === 0 ||
            this.params.imageUrl.length === 0) {
            throw new Error("One of more fields are empty");
        }

        const movie = {
            title: this.params.title,
            description: this.params.description,
            image: this.params.imageUrl,
            creator: this.app.userData.userEmail,
            peopleLiked: { likes: [] }
        }

        const result = await addNew(movie);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("Created successfully!");

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}

// ------------------------- DETAILS -------------------------
export async function movieDetails() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const movieId = this.params.id;

    let movie = await getById(movieId);

    const context = Object.assign(this.app.userData, { movie })

    if (movie.creator === this.app.userData.userEmail) {
        context.movie.isCreator = true;
    } else {
        context.movie.isCreator = false;
        console.log(movie)
        console.log(this.app.userData)
        let result = movie.peopleLiked.filter(email => email === this.app.userData.userEmail);
        if (result.length > 0) {
            context.movie.alreadyLiked = true;
        } else {
            context.movie.alreadyLiked = false;
        }
    }

    this.partial("./templates/movie/detailz.hbs", context);
}

// ------------------------- EDIT -------------------------
export async function edit() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const movieId = this.params.id;
    let movie = await getById(movieId);
    const context = Object.assign(this.app.userData, { movie });

    this.partial("./templates/movie/edit.hbs", context);

}

// ------------------------- EDIT (POST) -------------------------
export async function editPost() {

    const movieId = this.params.id;

    try {
        if (this.params.title.length === 0 ||
            this.params.description.length === 0 ||
            this.params.imageUrl.length === 0) {
            throw new Error("One of more fields are empty");
        }

        const movie = {
            title: this.params.title,
            description: this.params.description,
            image: this.params.imageUrl
        }

        const result = await updateById(movieId, movie);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("Movie edited successfully.");

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}

// ------------------------- DELETE -------------------------
export async function deleteGet() {
    if (confirm("Are you sure you want to delete this event?") === false) {
        return this.redirect("#/home");
    }

    const movieId = this.params.id;

    try {
        const result = await deleteIt(movieId);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("Deleted successfully");

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}

// ------------------------- LIKE -------------------------
export async function like() {
    const movieId = this.params.id;

    let movie = await getById(movieId);

    let email = this.app.userData.userEmail;

    try {
        const result = await likeIt(movie, email);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("You liked the movie successfully.");

        this.redirect(`#/details/${movieId}`);

    } catch (err) {
        showError(err.message);
    }
}