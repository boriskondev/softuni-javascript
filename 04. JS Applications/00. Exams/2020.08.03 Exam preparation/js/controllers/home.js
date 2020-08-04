import { getEvents } from "../data.js";

export async function home() {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs")
    };

    const events = await getEvents();
    this.app.userData.events = events;
    console.log(events)

    this.partial("./templates/home.hbs", this.app.userData);
}

