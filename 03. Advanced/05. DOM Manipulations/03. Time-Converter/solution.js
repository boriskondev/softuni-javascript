function attachEventsListeners() {
    document.querySelector("main").addEventListener("click", onClick);
    
    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }
    
    function convert(valueToConvert, convertFrom) {
        let valueInDays = valueToConvert / ratios[convertFrom];
        return {
            days: valueInDays * 1,
            hours: valueInDays * 24,
            minutes: valueInDays * 1440,
            seconds: valueInDays * 86400
        }
    }

    function onClick(e) {
        if (e.target.nodeName === "INPUT" && e.target.type === "button") {
            let elParentNode = e.target.parentNode.querySelector("input[type='text']")
            let value = elParentNode.value;
            let id = elParentNode.id;
            let calculated = convert(value, id);

            let outputFields = [...document.querySelectorAll("input[type='text']")];
            
            for (field of outputFields) {
                field.value = calculated[field.id];
            }
        }
    }
}