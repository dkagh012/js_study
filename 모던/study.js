const person = new Object();

person.name = 'Lee';
person.sayHello = function () {
  console.log(this.name);

}

console.log(person.name);
person.sayHello();