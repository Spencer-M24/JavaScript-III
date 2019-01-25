/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.(WINDOW) If this is used in a global context, it points to a global object, which means window in the broweser and global in Node.js
* 
 2. (IMPLICIT BINDING) When using this in an implicit binding way it points to the object on the function that is called, So basically it would be left of the period when the function is called.
* 
  3. (NEW BINDING)  As for new bind keyword, it construts a new object and points to it.
* 
  4. (EXPLICIT BINDING) We can tell Javascript engine to set this to point to a certain value using the call, apply and bind methods. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function thisbrowser() {
  console.log(this);
}
thisbrowser();

// Principle 2

// code example for Implicit Binding

const myCar = {
  name: "bmw",
  size: "small",
  gas: "full",

  drive: function() {
    console.log(`${this.name} is driving`);
  }
};

myCar.drive();

// Principle 3

// code example for New Binding

function Animal(name) {
    this.name = name;

}

let myAnimal = new Animal('My little doggy is very hungry');

    console.log(myAnimal.name)





  // Principle 4

  // code example for Explicit Binding


function dog() {
    console.log(this.bark);
  }

  let myDog = {
    name: "Pico",
    bark: "Bark!!",
  };

  dog = dog.bind(myDog)

  dog(); //bind



