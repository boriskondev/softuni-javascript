alert("The app works!")

import { home } from "./controllers/home.js";
import { register, registerPost, login, loginPost, logout } from "./controllers/user.js";
import { add, addPost, shoeDetails, edit, editPost, deleteGet, buy } from "./controllers/shoes.js";

window.addEventListener("load", () => {
    const app = Sammy("main", function () {
        this.use("Handlebars", "hbs");

        this.userData = {
            userEmail: localStorage.getItem("userEmail") || "",
            userId: localStorage.getItem("userId") || ""
        };

        // OK without logged in / not logged in functionality
        this.get("/", home);
        this.get("index.html", home);
        this.get("#/home", home);

        // OK
        this.get("#/register", register);
        this.post("#/register", context => { registerPost.call(context); });

        // OK
        this.get("#/login", login);
        this.post("#/login", context => { loginPost.call(context); } );

        // OK
        this.get("#/logout", logout);

        // OK
        this.get("#/add", add);
        this.post("#/add", context => { addPost.call(context); } );

        // OK
        this.get("#/details/:id", shoeDetails);

        // OK
        this.get("#/edit/:id", edit);
        this.post("#/edit/:id", context => { editPost.call(context); });

        // OK
        this.get("#/delete/:id", deleteGet);

        // OK
        this.get("#/buy/:id", buy);
    });

    app.run();
});