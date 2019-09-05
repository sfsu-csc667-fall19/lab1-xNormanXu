// declaring classes in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Something {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name)
  }
}

const s = new Something('tim');
s.hello();

// for practice

// Create a subclass
class subclass extends Something {
  constructor() {
    super('asd');
  }

  static myFunction() {
    console.log('I am static');
  }
}

const subclass = new subclass();
subclass.hello();

// add a property after the object has been instantiated
subclass.a = 'hello wordl';
console.log(subclass.a);

// add a static function
Subclass.myFunction();

Subclass.prototype.test = 4;
const newTest = new Subclass();
console.log(newTest.test);