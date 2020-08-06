import { showSuccess, showError } from "../notifications.js";
import { createEvent as apiCreateEvent } from "../data.js";
import { getEventById, updateEvent, deleteEvent as apiDelete, joinEvent as apiJoin } from "../data.js";

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
            throw new Error("Image URL should start with \"http://\" or \"https://\".");
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

        showSuccess("Event created successfully.");

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}

export async function details() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const eventId = this.params.id;

    let event = await getEventById(eventId);

    const isOrganizer = event.organizedBy === this.app.userData.username;

    const context = Object.assign(this.app.userData, { event, isOrganizer });

    this.partial("./templates/event/details.hbs", context);
}

export async function edit() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const eventId = this.params.id;

    let event = await getEventById(eventId);

    const context = Object.assign(this.app.userData, { event });

    this.partial("./templates/event/edit.hbs", context);

}

export async function editPost() {

    const eventId = this.params.id;

    try {
        if (this.params.name.length < 6) {
            throw new Error("Name must be at least 6 characters long.");
        }

        if (this.params.description.length < 10) {
            throw new Error("Description must be at least 10 characters long.");
        }

        if (!this.params.imageURL.startsWith("http://") && !this.params.imageURL.startsWith("https://")) {
            throw new Error("Image URL should start with \"http://\" or \"https://\".");
        }

        const event = {
            name: this.params.name,
            eventDate: this.params.dateTime,
            description: this.params.description,
            image: this.params.imageURL,
        }

        const result = await updateEvent(eventId, event);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("Event edited successfully.");

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}

export async function deleteEvent() {
    if (confirm("Are you sure you want to delete this event?") === false) {
        return this.redirect("#/home");
    }

    const eventId = this.params.id;

    try {
        const result = await apiDelete(eventId);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("Event closed successfully.");

        this.redirect("#/home");

    } catch (err) {
        showError(err.message);
    }
}

export async function joinEvent() {
    const eventId = this.params.id;

    let event = await getEventById(eventId);

    try {
        const result = await apiJoin(event);
        console.log(result)

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        showSuccess("You join the event successfully.");

        this.redirect(`#/details/${eventId}`);

    } catch (err) {
        showError(err.message);
    }
}
