function metricConverter(num, inputMetric, outputMetric) {
    let distance = Number(num);
    if (inputMetric == "m") {
        if (outputMetric == "cm") {
            distance = distance * 100;
        } else if (outputMetric == "mm") {
            distance = distance * 1000;
        }
    } else if (inputMetric == "cm") {
        if (outputMetric == "m") {
            distance = distance / 100;
        } else if (outputMetric == "mm") {
            distance = distance * 10;
        }
    } else if (inputMetric == "mm") {
        if (outputMetric == "m") {
            distance = distance / 1000;
        } else if (outputMetric == "cm") {
            distance = distance / 10;
        }
    }
    console.log(distance.toFixed(3));
}

metricConverter(12, "mm", "m");
metricConverter(150, "m", "cm");
metricConverter(45, "cm", "mm");