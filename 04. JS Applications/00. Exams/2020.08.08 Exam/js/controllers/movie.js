// import { showSuccess, showError } from "../notifications.js";
import { addNew } from "../data/content.js";
// import { getById, updateById, deleteIt } from "../data/content.js";

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
    console.log(this.params)
    try {
        if (this.params.title.length === 0 ||
            this.params.description.length === 0 ||
            this.params.imageUrl.length === 0) {
            throw new Error("One of more fields are empty");
        }

        const movie = {
            title: this.params.title,
            description: this.params.description,
            imageUrl: this.params.imageURL,
            creator: this.app.userData.userEmail,
            peopleLiked: 0
        }

        const result = await addNew(movie);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        alert("Created successfully!");
        // showSuccess("Event created successfully.");

        this.redirect("#/home");

    } catch (err) {
        alert(err.message);
        // showError(err.message);
    }
}

// // ------------------------- DETAILS -------------------------
// export async function movieDetails() {
//     this.partials = {
//         header: await this.load("./templates/common/header.hbs"),
//         footer: await this.load("./templates/common/footer.hbs")
//     };
//
//     const movieId = this.params.id;
//
//     let movie = await getById(movieId);
//
//     const isCreator = movie.creator === this.app.userData.userEmail;
//
//     const context = Object.assign(this.app.userData, { movie, isCreator });
//
//     this.partial("./templates/movie/detailz.hbs", context);
// }
//
// // ------------------------- EDIT -------------------------
// export async function edit() {
//     this.partials = {
//         header: await this.load("./templates/common/header.hbs"),
//         footer: await this.load("./templates/common/footer.hbs")
//     };
//
//     const movieId = this.params.id;
//
//     let movie = await getById(movieId);
//
//     const context = Object.assign(this.app.userData, { movie });
//
//     this.partial("./templates/movie/edit.hbs", context);
//
// }
//
// // ------------------------- EDIT (POST) -------------------------
// export async function editPost() {
//
//     const movieId = this.params.id;
//
//     try {
//         if (this.params.title.length === 0 ||
//             this.params.description.length === 0 ||
//             this.params.imageUrl.length === 0) {
//             throw new Error("One of more fields are empty");
//         }
//
//         const movie = {
//             title: this.params.title,
//             description: this.params.description,
//             imageUrl: this.params.imageURL
//         }
//
//         const result = await updateById(movieId, movie);
//
//         if (result.hasOwnProperty("errorData")) {
//             const error = new Error();
//             Object.assign(error, result);
//             throw error;
//         }
//
//         alert("Event edited successfully.");
//         // showSuccess("Event edited successfully.");
//
//         this.redirect("#/home");
//
//     } catch (err) {
//         alert(err.message);
//         // showError(err.message);
//     }
// }
//
// // ------------------------- DELETE -------------------------
// export async function deleteGet() {
//     if (confirm("Are you sure you want to delete this event?") === false) {
//         return this.redirect("#/home");
//     }
//
//     const movieId = this.params.id;
//
//     try {
//         const result = await deleteIt(movieId);
//
//         if (result.hasOwnProperty("errorData")) {
//             const error = new Error();
//             Object.assign(error, result);
//             throw error;
//         }
//
//         alert("Deleted successfully");
//         // showSuccess("Event closed successfully.");
//
//         this.redirect("#/home");
//
//     } catch (err) {
//         alert(err.message);
//         // showError(err.message);
//     }
// }


//
// // ------------------------- INCREASE SOMETHING IN OBJECT -------------------------
// export async function join() {
//     const eventId = this.params.id;
//
//     let event = await getById(eventId);
//
//     try {
//         const result = await joinIt(event);
//
//         if (result.hasOwnProperty("errorData")) {
//             const error = new Error();
//             Object.assign(error, result);
//             throw error;
//         }
//
//         showSuccess("You join the event successfully.");
//
//         this.redirect(`#/details/${eventId}`);
//
//     } catch (err) {
//         showError(err.message);
//     }
// }
