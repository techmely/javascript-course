let User = class {
  sayHi() {
    console.log("Hi");
  }
};

const user1 = new User();
user1.sayHi();

let Student = class MyStudent {
  sayHi() {
    console.log("Hi student");
  }
};

const student1 = new Student();
student1.sayHi();

function makeClass(message) {
  return class {
    sayHi() {
      console.log(`Hi, ${message}`);
    }
  };
}

let Teacher = makeClass("Teacher");

new Teacher().sayHi();
