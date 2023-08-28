class User {
  #firstName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.lastName = lastName;
  }

  get fullname() {
    console.log("call getter");
    return this.#firstName + " " + this.lastName;
  }

  get getFirstName() {
    return this.#firstName;
  }

  set setFirstName(value) {
    if (value.length < 1) {
      return alert("Name is too short");
    }
    this.#firstName = value;
  }

  set setLastName(value) {
    this.lastName = value;
  }
}

const user1 = new User("Nguyen Van", "A");
const user2 = new User("Nguyen Van", "B");

console.log("fullname", user1.fullname);
console.log("fullname", user2.fullname);

user1.setFirstName = "Pham Van";
user2.setLastName = "C";

console.log("fullname", user1.fullname);
console.log("fullname", user2.fullname);

console.log(user1.getFirstName, user1.lastName);
