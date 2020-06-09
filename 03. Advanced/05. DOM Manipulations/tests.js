let ratios = {
    days: 1,
    hour: 24,
    minutes: 1440,
    seconds: 86400
}

function convert(valueToConvert, convertFrom) {
    let valueInDays = valueToConvert / ratios[convertFrom];
    return {
        days: valueInDays * 1,
        hour: valueInDays * 24,
        minutes: valueInDays * 1440,
        seconds: valueInDays * 86400
    }
}

console.log(convert(2, "days"))