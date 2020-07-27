const appId = 'B26273FB-C94F-77D1-FF28-CE26B5DFC900';
const apiKey = '8B071CA5-22A5-4394-B53D-195424C76167';

let endpoints = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    TEAMS: 'data/teams',
    UPDATEUSER: 'users/',
    LOGOUT: 'users/logout',
    USERS: 'data/users',
    UPDATETEAM: 'data/teams/'
}

export function host(endpoint) {
    return `https://api.backendless.com/${appId}/${apiKey}/${endpoint}`;
}

export async function register(username, password) {
    return (await fetch(host(endpoints.REGISTER), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();
}

export async function login(username, password) {
    return (await fetch(host(endpoints.LOGIN), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
            password
        })
    })).json();
}

export async function createTeam(team) {
    let token = localStorage.getItem('userToken');
    if (token === null || token === undefined) {
        throw new Error('User is not logged in!');
    }

    let result = await (await fetch(host(endpoints.TEAMS), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(team)
    })).json();

    if (result.hasOwnProperty('errorData')) {
        let error = new Error();
        Object.assign(error, result);
        throw error;
    }

    await setUserTeamId(result.ownerId, result.objectId);

    return result;
}

export async function getTeamById(teamId) {
    let token = localStorage.getItem('userToken');
    if (token === null || token === undefined) {
        throw new Error('User is not logged in!');
    }
    
    let team = await (await fetch(host(endpoints.TEAMS + '/' + teamId),{
        headers: {
            'user-token': token
        }})).json();

    let members = await (await fetch(host(endpoints.USERS))).json();

    members = members.filter(x => x.teamId === teamId);

    Object.assign(team, { members });

    return team;
}

export async function getTeams() {
    let token = localStorage.getItem('userToken');
    if (token === null || token === undefined) {
        throw new Error('User is not logged in!');
    }

    return (await fetch(host(endpoints.TEAMS),{
        headers: {
            'user-token': token
        }})).json();
}

export async function logout() {
    let token = localStorage.getItem('userToken');
    if (token === null || token === undefined) {
        throw new Error('User is not logged in!');
    }

    return (await fetch(host(endpoints.LOGOUT), {
        headers: {
            'user-token': token
        }
    }));
}

export async function editTeam(userId, teamId, name, comment) {
    let token = localStorage.getItem('userToken');
    if (token === null || token === undefined) {
        throw new Error('User is not logged in!');
    }

    let baseTeam = await getTeamById(teamId);

    if(userId !== baseTeam.ownerId) {
        throw new Error('Only the owner can edit.');
    }

    let result = await (await fetch(host(endpoints.UPDATETEAM + teamId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({ name,
        comment })
    })).json();

    if (result.hasOwnProperty('errorData')) {
        let error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;
}

export async function setUserTeamId(userId, teamId) {
    let token = localStorage.getItem('userToken');
    if (token === null || token === undefined) {
        throw new Error('User is not logged in!');
    }

    let result = await (await fetch(host(endpoints.UPDATEUSER + userId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({ teamId })
    })).json();

    if (result.hasOwnProperty('errorData')) {
        let error = new Error();
        Object.assign(error, result);
        throw error;
    }

    return result;
}