import { createTeam } from '../data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        createForm: await this.load('./templates/create/createForm.hbs')
    };

    this.partial('./templates/create/createPage.hbs'); //
}

export async function createPost() {
    let newTeam = {
        name: this.params.name,
        comment: this.params.comment
    }

    if ([...Object.values(newTeam)].some(x => x.length == 0)) {
        alert('All fields are rquered!');
        return;
    }

    try {
        let result = await createTeam(newTeam);
        if (result.hasOwnProperty('errorData')){
            let error = new Error();
            Object.assign(error, result);
            throw error;
        }
        this.app.userData.hasTeam = true;
        this.app.userData.teamId = result.objectId;
        localStorage.setItem('teamId', result.objectId);

        this.redirect(`#/catalog/${result.objectId}`);
    } catch (err) {
        alert(err.message);
    }
}