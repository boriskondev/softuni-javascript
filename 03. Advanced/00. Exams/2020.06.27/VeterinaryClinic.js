class VeterinaryClinic{
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.petsInClinic = 0;
        this.totalProfit = 0;
    }
    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();
        if (this.petsInClinic < this.capacity) {
            let findOwner = this.clients.filter(obj => obj.ownerName === ownerName);
            if (findOwner.length === 0) {
                // When owner does not exist.
                let newOwner = {
                    ownerName: ownerName,
                    pets: []
                };
                let newPet = {
                    petName: petName,
                    kind: kind,
                    procedures: []
                };
                for (let procedure of procedures) {
                    newPet.procedures.push(procedure);
                }
                newOwner.pets.push(newPet);
                this.clients.push(newOwner);
                this.petsInClinic++;
                return `Welcome ${ petName }!`;
            } else {
                // When owner exists.
                findOwner = findOwner[0];
                let findPet = findOwner.pets.filter(pet => pet.petName === petName)[0];
                if (findPet) {
                    // Pet exists and has full list of procedures.
                    if (findPet.procedures.length > 0) {
                        let errorMessage = `This pet is already registered under ${ ownerName } name! ${ petName } is on our lists, waiting for `;
                        errorMessage += findPet.procedures.join(", ");
                        errorMessage += "."
                        throw new Error(errorMessage);
                    }
                } else {
                    // Pet does not exist.
                    let newPet = {
                        petName: petName,
                        kind: kind,
                        procedures: []
                    };
                    for (let procedure of procedures) {
                        newPet.procedures.push(procedure);
                    }
                    findOwner.pets.push(newPet);
                    this.petsInClinic++;
                    return `Welcome ${ petName }!`;
                }
            }
        } else {
            throw new Error("Sorry, we are not able to accept more patients!");
        }
    }

    onLeaving(ownerName, petName) {
        let findOwner = this.clients.filter(obj => obj.ownerName === ownerName);
        if (findOwner.length === 0) {
            // Owner not found.
            throw new Error("Sorry, there is no such client!");

        } else {
            // Owner found.
            findOwner = findOwner[0];
            let findPet = findOwner.pets.filter(pet => pet.petName === petName)[0];
            if (findPet.length === 0 || findPet.procedures.length === 0) {
                throw new Error(`Sorry, there are no procedures for ${ petName }!`)
            } else {
                let proceduresCost = 500 * (findPet.procedures.length);
                this.totalProfit += 500;
                this.petsInClinic--;
                findPet.procedures = [];
                return `Goodbye ${ petName }. Stay safe!`
            }
        }
    }

    toString () {
        let result = "";
        let business = (this.petsInClinic / this.capacity ) * 100;

        result += `${ this.clinicName } is ${ business }% busy today!`
        result += `\nTotal profit: ${ this.totalProfit.toFixed(2) }$`

        this.clients.sort((ownerA, ownerB) => { return ownerA.ownerName.localeCompare(ownerB.ownerName)});

        for (let owner of this.clients) {
            result += `\n${ owner.ownerName } with:`
            owner.pets.sort((petA, petB) => { return petA.petName.localeCompare(petB.petName)});
            for (let pet of owner.pets) {
                result += `\n---${ pet.petName } - a ${ pet.kind } that needs: ${ pet.procedures.join(", ")}`
            }
        }

        return result
    }
}


let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());

