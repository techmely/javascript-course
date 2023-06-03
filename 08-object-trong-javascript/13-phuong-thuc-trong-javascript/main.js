let user = {
  name: "Alex",
  age: 20,
  sayBye: function () {
    console.log(this.name + " says Bye");
  },
  sayWelcome() {
    console.log("Welcome");
  },
};

let admin = user;

user.sayHello = function () {
  console.log("Hello");
  console.log(this.name)
};

user.sayHello();

function sayHi() {
  console.log("Hi");
}

user.sayHi = sayHi;

user.sayHi();
console.log(admin);
admin.sayBye();
user.sayWelcome();

function sayHello() {
  console.log(this.name);
}

let user1 = { name: "Ann" };
let user2 = { name: "John" };

user1.sayHello = sayHello;
user2.sayHello = sayHello;

user1.sayHello();
user2.sayHello();

let user = {
  name: "Alex",
  age: 28,
  sayHello() {
    let arrowFunc = () => console.log(this.name)
    arrowFunc()
  }
}

user.sayHello()