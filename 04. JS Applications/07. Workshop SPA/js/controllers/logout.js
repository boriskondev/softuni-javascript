import {logout as apiLogout} from "../data.js";

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

    } catch (err) {
        alert(err.message);
        return;
    }

    this.redirect('#/home');
}