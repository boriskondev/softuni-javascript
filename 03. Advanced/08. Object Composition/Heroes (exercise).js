function solve() {
    const fighterPrototype = {
        fight
    };
    
    function fight() {
        this.stamina--;
        console.log(`${this.name} slashes at the foe!`);
    }

    const magePrototype = {
        cast
    };

    function cast(spell) {
        this.mana--;
        console.log(`${this.name} cast ${spell}`);
    }

    function fighter(name) {
        const fighterInstance = Object.create(fighterPrototype);
        Object.assign(fighterInstance, {
            name,
            health: 100,
            stamina: 100
        })

        return fighterInstance
    }

    function mage(name) {
        const mageInstance = Object.create(magePrototype);
        Object.assign(mageInstance, {
            name,
            health: 100,
            mana: 100
        })

        return mageInstance
    }

    return {fighter, mage}
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);