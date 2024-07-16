const person = {
  name: "waseem",
  greet: function () {
    console.log("hello" + this.name + "!");
  },
  greet_callback: () => {
    console.log("hello" + this.name + "!"); //arrow function dont have the the value of this .
    // enclosing scope is the global context, where this does not refer to the person object.
  },
};

person.greet();
person.greet_callback();

// this {} in node
// this (window) in browser
