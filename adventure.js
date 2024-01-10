

// Step 1
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"]
    }
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
};

// Loop 
for (const item of adventurer.inventory) {
  console.log(item);
}

// Test roll 
adventurer.roll();

// Step 2
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  duel(opponent) {
    while (this.health > 50 && opponent.health > 50) {
      const roll1 = this.roll();
      const roll2 = opponent.roll();

      if (roll1 > roll2) {
        opponent.health -= 1;
      } else {
        this.health -= 1;
      }

      console.log(
        `${this.name} (${this.health} health) vs. ${opponent.name} (${opponent.health} health)`
      );
    }

    const winner = this.health > opponent.health ? this : opponent;
    console.log(`${winner.name} wins the duel!`);
  }
}

// Step 3
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

// Step 4
Character.MAX_HEALTH = 100;

// Step 5
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }

  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }

  findByIndex(index) {
    return this.adventurers[index];
  }

  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
healers.generate("Robin");

// Step 7
class Dragon extends Character {
}
class Unicorn extends Character {
}
const robin = new Adventurer("Robin", "Archer");
robin.scout();

const rival = new Adventurer("Rival", "Fighter");
robin.duel(rival);

const dragon = new Dragon("Smaug");
const unicorn = new Unicorn("Sparkle");

robin.duel(dragon);
robin.duel(unicorn);
