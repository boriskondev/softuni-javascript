function aquarium(length, width, height, percentage) {
    let total_volume = length * width * height * 0.001;
    let scrap = total_volume * percentage / 100;
    let water_volume = total_volume - scrap;
    console.log(water_volume.toFixed(3));
}

aquarium(85, 75, 47, 17);