# JavaScript Classes
JavaScript classes are a way to create objects with pre-defined properties and methods. They are a newer syntax introduced in ECMAScript 2015 and provide a more familiar syntax for those coming from other object-oriented programming languages.

# Reference Type
In JavaScript, objects are reference types. This means that when you create an object and assign it to a variable, the variable actually contains a reference to the object in memory, rather than a copy of the object itself. For example:

- let object1 = { value: 10 }; //original
- let object2 = object1;      //references object1
- let object3 = { value: 10 }; //new object

Here, object1 and object2 both reference the same object in memory, while object3 is a completely new object with the same value.

# Context vs Scope
In JavaScript, the this keyword refers to the context of the current function. This can be a bit confusing, as it is different from the concept of scope. For example:
``
const object4 = {
   a: function() {
       console.log(this);
   }
}
``
Here, this refers to the context of object4, which is the object itself.

# Instantiation
Instantiation is the process of creating a new instance of a class. In JavaScript, you can create a new instance of a class using the new keyword. For example:

"class Player {
   constructor(name, type) {
      console.log(this);
      this.name = name;
      this.type = type;
   }
   introduce() {
      console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
   }
}

class Wizard extends Player {
   constructor(name, type) {
      super(name, type)
   }
   play() {
      console.log(`I'm a ${this.type}`);
   }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');"

Here, wizard1 and wizard2 are both instances of the Wizard class. The super keyword is used to call the constructor of the Player class, which Wizard extends.

# Additional Notes:
- Classes are a type of constructor function.
- Classes are not hoisted, meaning you must declare a class before using it.
- Classes can extend other classes using the 'extends' keyword.
- Classes have a constructor method that is automatically called when a new instance is created.
- The 'this' keyword inside a class refers to the instance of the class being created or referenced.
