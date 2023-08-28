class User {
  static school = "FPT";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, ${this.name} ${this.age}`);
  }

  static goToSchool() {
    console.log("Go to School");
  }
}

let user1 = new User("Thaycacac", 20);
let user2 = new User("Kungfutech", 18);

user1.sayHi();
user2.sayHi();

User.goToSchool();

console.log(User.school);
