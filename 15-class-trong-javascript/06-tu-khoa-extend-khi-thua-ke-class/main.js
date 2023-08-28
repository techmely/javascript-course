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
}

let animal1 = new Animal("Dog");

animal1.run(100);
animal1.stop();

let dog1 = new Dog("Pug");

dog1.bark();
dog1.run(50);
dog1.stop();
