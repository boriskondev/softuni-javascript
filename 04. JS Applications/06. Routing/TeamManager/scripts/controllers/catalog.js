export default async function () {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
        team: await this.load("./templates/catalog/team.hbs")
    };

    const data = Object.assign({}, this.app.userData);

    data.teams = [
        {
            teamId: "12212",
            name: "Lioliovci",
            comment: "Ostavka!!!"
        },
        {
            teamId: "1eqeeqq212",
            name: "Plateni teroristi",
            comment: "Ostavka!!!"
        },
        {
            teamId: "1122e",
            name: "Na Bojkov momchetata",
            comment: "Ostavka!!!"
        }
    ]

    this.partial("./templates/catalog/teamCatalog.hbs", data);
};