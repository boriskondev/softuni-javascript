import { commonPartials } from "./partials.js"

export function getHome(context) {
    context.loadPartials(commonPartials).partial("./templates/home.hbs")
}