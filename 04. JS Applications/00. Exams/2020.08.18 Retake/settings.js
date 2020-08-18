// The host data is set up!

export function host(endpoint) {
    const appId = "796315F6-11DD-0D7B-FFFD-8B6A2B765A00";
    const restApiKey = "21DE53C6-C8B3-409A-AEE7-206F98D93EDA";
    return `https://api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

// Content endpoint should be different!

export const endpoints = {
    REGISTER: "users/register",
    LOGIN: "users/login",
    LOGOUT: "users/logout",
    SHOES: "data/shoes"
};
