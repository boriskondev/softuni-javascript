import {logout as apiLogout} from "../data.js";
import {showInfo, showError} from "../notifications.js"

export default async function logout() {
    try {
        const result = await apiLogout();
        if (result.hasOwnProperty("errorData")) {
            let error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = "";
        this.app.userData.userId = "";

        showInfo("Successfully logged out!");

        this.redirect('#/home');

    } catch (err) {
        showError(err.message);
    }
}