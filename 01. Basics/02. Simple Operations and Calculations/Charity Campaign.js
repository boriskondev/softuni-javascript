function charityCampaign(days, cooks, cakes, wafles, pancakes) {
    let daily_sum = cooks * ((cakes * 45) + (wafles * 5.80) + (pancakes * 3.20));
    let total_sum = daily_sum * days;
    let final_sum = total_sum - ((1/8) * total_sum);
    console.log(final_sum.toFixed(2));
}

charityCampaign(20, 8, 14, 30, 16)