function danceHall(length, width, side) {
    let l = Number(length);
    let w = Number(width);
    let s = Number(side);
    let hall_area = (l * 100) * (w * 100);
    let wardrobe_area = (s * 100)* (s * 100);
    let bench_area = hall_area / 10;
    let free_area = hall_area - wardrobe_area - bench_area;
    let dancers = free_area / (40 + 7000);
    console.log(Math.floor(dancers));
}

danceHall(50, 25, 2);