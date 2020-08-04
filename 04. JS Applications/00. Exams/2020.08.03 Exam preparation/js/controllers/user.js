import { commonPartials } from "./partials.js";
import { register as apiRegister } from "../data.js"

export function getLogin(context) {
    context.loadPartials(commonPartials).partial("./templates/user/login.hbs")
}

export function getProfile(context) {
    context.loadPartials(commonPartials).partial("./templates/user/profile.hbs")
}

export function getRegister(context) {
    context.loadPartials(commonPartials).partial("./templates/user/register.hbs")
}

export async function registerPost(context) {
    console.log(this.params)
    // const result = await apiRegister()

}