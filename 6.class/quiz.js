class Employee {

  constructor(name, form, workTime, money) {

    this.name = name;

    this.form = form;

    this.workTime = workTime;

    this.money = money;

  }
  calculatePay() {
    return this.workTime * this.money;
  }
}

class Worker1 extends Employee { }
const worker1 = new Worker1('one', 'regular', 80, 10000);
class Worker2 extends Employee { }
const worker2 = new Worker1('two', 'contract', 80, 8000);

console.log(worker1);
console.log(worker1.calculatePay());
console.log(worker2.calculatePay());