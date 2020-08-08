alert("The app works!")

import { home } from "./controllers/home.js";
import { register, registerPost, login, loginPost, logout } from "./controllers/user.js";
import { add, addPost, movieDetails, edit, editPost, deleteGet } from "./controllers/movie.js";

window.addEventListener("load", () => {
    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");

        this.userData = {
            userEmail: localStorage.getItem("userEmail") || "",
            userId: localStorage.getItem("userId") || ""
        };

        // OK
        this.get("/", home);
        this.get("index.html", home);
        this.get("#/home", home);

        // OK
        this.get("#/register", register);
        this.post("#/register", context => { registerPost.call(context); });

        // OK
        this.get("#/login", login);
        this.post("#/login", context => { loginPost.call(context); });

        // OK
        this.get("#/logout", logout);

        // OK
        this.get("#/add", add);
        this.post("#/add", context => { addPost.call(context); });

        this.get("#/details/:id", movieDetails);

        this.get("#/edit/:id", edit);
        this.post("#/edit/:id", context => { editPost.call(context); });

        // It gives an error when a function is called just "delete"
        this.get("#/delete/:id", deleteGet);
        //
        // this.get("#/join/:id", join);

        // this.get("", function () {
        //     this.swap("<h1>Error 404: Page not found.</h1>")
        // })
    });

    app.run();
});