export async function getCodeAsync() {
    return "ny"
}

export async function getTodayAsync() {
    return {
        "forecast": { "condition": "Sunny", "high": "19", "low": "8" },
        "name": "New York, USA"
    }
}

export async function getUpcomingAsync() {
    return {
        "forecast": [
            { "condition": "Partly sunny", "high": "17", "low": "6" },
            { "condition": "Overcast", "high": "9", "low": "3" },
            { "condition": "Overcast", "high": "7", "low": "3" }
        ],
        "name": "New York"
    }
}