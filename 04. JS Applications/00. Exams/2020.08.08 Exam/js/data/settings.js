export function host(endpoint) {
    const appId = "C8CFFE68-DC8B-F904-FFBC-6C9990D8C800"
    const restApiKey = "C9F744E5-D3DC-47B4-B69F-B58450812FFF"
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

export const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout",
    MOVIES: "data/movies"
};