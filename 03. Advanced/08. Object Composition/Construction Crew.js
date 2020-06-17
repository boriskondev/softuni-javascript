// SOLUTION 1:
function solve(obj) {
    if (obj.dizziness === true) {
        let currentHydration = obj.levelOfHydrated;
        let additionalHydration = 0.1 * obj.weight * obj.experience
        let totalHydration = {levelOfHydrated: currentHydration + additionalHydration}
        Object.assign(obj, {dizziness: false})
        Object.assign(obj, totalHydration)
    }
    return obj
}

// SOLUTION 2:
// function solve(obj) {
//     if (obj.dizziness === true) {
//         obj.dizziness = false;
//         obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
//     }
//     return obj
// }

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });