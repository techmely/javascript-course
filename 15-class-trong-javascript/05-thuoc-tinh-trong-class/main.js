class User {
  name = "Thaycacac";

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

const user1 = new User();
user1.sayHi();
