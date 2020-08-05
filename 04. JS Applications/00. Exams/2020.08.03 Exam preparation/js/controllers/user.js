import { register as apiRegister, getEventsByCreator } from "../data.js";
import { login as apiLogin } from "../data.js";
import { logout as apiLogout } from "../data.js";

// import { showInfo, showError } from '../notification.js';

export async function register() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/user/register.hbs", this.app.userData);
}

export async function login() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    this.partial("./templates/user/login.hbs", this.app.userData);
}

export async function profile() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const events = await getEventsByCreator();

    const context = Object.assign(this.app.userData, { events });

    console.log(context)

    this.partial("./templates/user/profile.hbs", context);




}

export async function registerPost() {
    try {
        if (this.params.username.length < 3) {
            throw new Error("Username must be at least 3 characters long");
        }

        if (this.params.password.length < 6) {
            throw new Error("Password must be atleast 6 characters long");
        }

        if (this.params.password !== this.params.rePassword) {
            throw new Error("Passwords don't match");
        }

        const result = await apiRegister(this.params.username, this.params.password);

        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        // showInfo('Successfully registered');
        alert("User registration successful.");

        localStorage.setItem("username", result.username);
        localStorage.setItem("userId", result.objectId);

        this.redirect("#/home");
        // Navbar should be different for registered users!

    } catch (err) {
        alert(err.message);
        // showError(err.message);
    }
}

export async function loginPost() {
    try {
        const result = await apiLogin(this.params.username, this.params.password);
        if (result.hasOwnProperty("errorData")) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;

        alert("Login successful.");
        // showInfo(`Logged in as ${result.username}`);

        this.redirect("#/home");
    } catch (err) {
        alert(err.message);
        // showError(err.message);
    }
}

export async function logout() {
    try {
        const result = await apiLogout();
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = "";
        this.app.userData.userId = "";

        alert("Logout successful.");
        // showInfo('Successfully logged out');

        this.redirect("#/home");
    } catch (err) {
        alert(err.message);
        // showError(err.message);
    }
}