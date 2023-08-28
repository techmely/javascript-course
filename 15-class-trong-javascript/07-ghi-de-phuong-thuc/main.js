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
  bark() {
    console.log(`${this.name} barks woof`);
  }
  stop() {
    super.stop();
    console.log(`${this.name} stop`);
  }
}

const dog1 = new Dog("Pug");
dog1.stop();
