import { register as apiRegister } from "../data.js"
import {showError, showInfo} from "../notifications.js";

export default async function register() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
        registerForm: await this.load("./templates/user/registerForm.hbs")
    };

    this.partial("./templates/user/registerPage.hbs", this.app.userData);
}

export async function registerPost() {
    try {
        if (this.params.username === "" ||
            this.params.password === "" ||
            this.params.repeatPassword === "") {
            throw new Error("Information in one or more fields is missing!");
        }

        if (this.params.username.length < 3) {
            throw new Error("Username must be at least 3 characters long!");
        }

        if (this.params.password.length < 6) {
            throw new Error("Password must be at least 6 characters long!");
        }

        if (this.params.password !== this.params.repeatPassword) {
            throw new Error("Passwords do not match!");
        }

        const result = await apiRegister(this.params.username, this.params.password);
        if (result.hasOwnProperty("errorData")) {
            let error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;

        showInfo("Successfully registered!");

        this.redirect('#/login');

    } catch (err) {
        showError(err.message);
    }
}