export function host(endpoint) {
    const appId = "02AB75F4-CD5C-A6C2-FF5D-84792839C500";
    const restApiKey = "94015CE5-14C7-4B3F-9552-B7C7D5B2C459"
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

export const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout",
    RECIPES: "data/recipes"
};