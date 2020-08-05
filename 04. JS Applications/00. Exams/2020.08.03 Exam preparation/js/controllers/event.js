import { createEvent as apiCreateEvent } from "../data.js";
import { getEventById } from "../data.js";

export async function create() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/event/create.hbs", this.app.userData);
}

export async function createPost() {
    try {
        if (this.params.name.length < 6) {
            throw new Error("Name must be at least 6 characters long.");
        }

        if (this.params.description.length < 10) {
            throw new Error("Description must be at least 10 characters long.");
        }

        if (!this.params.imageURL.startsWith("http://") && !this.params.imageURL.startsWith("https://")) {
            throw new Error("Image URL should start with 'http://' or 'https://'.");
        }

        const event = {
            name: this.params.name,
            eventDate: this.params.dateTime,
            description: this.params.description,
            image: this.params.imageURL,
            organizedBy: this.app.userData.username,
            interestedIn: 0
        }

        const result = await apiCreateEvent(event);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        // showInfo('Successfully registered');
        alert("Event created successfully.");

        this.redirect("#/home");

    } catch (err) {
        alert(err.message);
        // showError(err.message);
    }
}

export async function details() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const eventId = this.params.id;

    let event = this.app.userData.events.find(event => event.objectId === eventId);

    if (event === undefined) {
        event = await getEventById(eventId);
    }

    const context = Object.assign({ event }, this.app.userData);

    this.partial("./templates/event/details.hbs", context);
}

export async function edit() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const eventId = this.params.id;

    let event = this.app.userData.events.find(event => event.objectId === eventId);

    if (event === undefined) {
        event = await getEventById(eventId);
    }

    const context = Object.assign({ event }, this.app.userData);
    console.log(context)

    this.partial("./templates/event/edit.hbs", context);

}

// export async function editPost() {
//     const movieId = this.params.id;
//
//     try {
//         if (this.params.title.length === 0) {
//             throw new Error('Title is required');
//         }
//
//         const movie = {
//             title: this.params.title,
//             image: this.params.image,
//             description: this.params.description,
//             genres: this.params.genres,
//             tickets: Number(this.params.tickets)
//         };
//
//         const result = await updateMovie(movieId, movie);
//
//         if (result.hasOwnProperty('errorData')) {
//             const error = new Error();
//             Object.assign(error, result);
//             throw error;
//         }
//
//         for (let i = 0; i < this.app.userData.movies.length; i++) {
//             if (this.app.userData.movies[i].objectId == movieId) {
//                 this.app.userData.movies.splice(i, 1);
//             }
//         }
//
//         showInfo('Movie edited');
//         this.redirect('#/details/' + result.objectId);
//     } catch (err) {
//         console.error(err);
//         showError(err.message);
//     }
// }
