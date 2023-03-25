function Fruit(name) {
  this.name = name;

  this.display = () => {
    console.log(`${this.name}`)
  };
}

const apple = new Fruit('테스트');
const apple2 = new Fruit('테스트2');

console.log(apple.display);
console.log(apple2.display);

apple.display();
apple2.display();