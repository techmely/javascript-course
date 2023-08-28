class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}

class Dog extends Animal {
  constructor(name, isSpottyTongue) {
    super(name);
    this.isSpottyTongue = isSpottyTongue;
  }
  bark() {
    console.log(
      `${this.name} barks woof ${
        this.isSpottyTongue ? "with spotty tongue" : ""
      }`
    );
  }
  stop() {
    super.stop();
    console.log(`${this.name} stop`);
  }
}

const dog1 = new Dog("Pug", true);
dog1.bark();
