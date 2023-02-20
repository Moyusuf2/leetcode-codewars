// REFERENCE TYPE

 let Object1 = { value: 10}; //original
 let object2 = object1;      //references object1
 let object3 = { value: 10}  // new object

 // context vs scope

 const object4 = {
    a: function() {
        console.log(this);
    }
 }

 // Instantiation - when you copy an object and reuse the code

 class Player {
    constructor(name,type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
 }

 class Wizard extends Player {
    constructor(name,type) {
        super(name,type)
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
 }

 const wizard1 = new Wizard('Shelly','Healer');
 const wizard2 = new Wizard('Shawn','Dark Magic');
 