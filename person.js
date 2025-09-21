const person1 = {
  name: "Tushar",
  age: 12,
  gender: "male",
  address: {
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
  },
  hobbies: ["reading", "traveling", "coding"],
  isMarried: false,

  getMarried: function () {
    if (this.age == 12) {
      this.isMarried = true;
    }
  },
};

console.log(person1.hobbies[0]);
