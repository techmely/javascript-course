class User {
  // hàm khởi tạo
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // phương thức
  sayHi() {
    console.log(`Hi, ${this.name} ${this.age}`);
  }
}

let user1 = new User("Thaycacac", 20);
let user2 = new User("Kungfutech", 18);
user1.sayHi();
user2.sayHi();

console.log(typeof User);
