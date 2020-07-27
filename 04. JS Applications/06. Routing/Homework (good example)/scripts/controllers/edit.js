import { getTeamById, editTeam, setUserTeamId } from '../data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        editForm: await this.load('./templates/edit/editForm.hbs')
    };

    let team = await getTeamById(this.params.teamId);

    this.partial('./templates/edit/editPage.hbs', team);
}

export async function editPost() {
    let name = this.params.name;
    let comment = this.params.comment;

    if (name.length === 0) {
        throw new Error('Name must be valid');
    }

    await editTeam(this.app.userData.userId, this.params.teamId, name, comment);

    this.redirect(`#/catalog/${this.params.teamId}`)
}

export async function addMember() {
    await setUserTeamId(this.app.userData.userId, this.params.teamId);

    this.app.userData.hasTeam = true;
    this.app.userData.teamId = this.params.teamId;
    localStorage.setItem('teamId', this.params.teamId);

    this.redirect('#/home');
}

export async function leaveMember() {
    await setUserTeamId(this.app.userData.userId, null);

    this.app.userData.hasTeam = false;
    this.app.userData.teamId = undefined;
    localStorage.setItem('teamId', undefined);

    this.redirect('#/home');
}