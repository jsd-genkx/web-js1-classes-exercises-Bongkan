// class = (ES6 feature) provides a more structured and clearner way to work with objects compared to traditional constructor functions.

// constructor function - without class

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.displayProduct = function () {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ฿${this.price.toFixed(2)}`);
//   };
//   this.calculateTotal = function (salesTax) {
//     return this.price + this.price * salesTax;
//   };
// }

// const salesTax = 0.07;

// const product1 = new Product("Shirt", 249.99);
// const product2 = new Product("Pants", 339.99);
// const product3 = new Product("Underwear", 149.99);

// product1.displayProduct();

// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total Price (with tax): ฿${totalPrice.toFixed(2)}`);

// class

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   // don't need to use the function keyword in class
//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ฿${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const salesTax = 0.07;

// const product1 = new Product("Shirt", 249.99);
// const product2 = new Product("Pants", 339.99);
// const product3 = new Product("Underwear", 149.99);

// product1.displayProduct();

// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total Price (with tax): ฿${totalPrice.toFixed(2)}`);


class toDo {
  static taskCount = 0;
  constructor(day, task) {
    this.day = day;
    this.task = task;
    toDo.taskCount++;
  }
  displayTask() {
    console.log(`Date: ${this.day}`);
    console.log(`Task: ${this.task}`);
  }
  static calculateTotalTask() {
    console.log(`There are ${toDo.taskCount} tasks`);
  }
}
const task1 = new toDo("Monday", "Grocery");
const task2 = new toDo("Tueday", "Water flower");
const task3 = new toDo("Wednesday", "Visit Theme park");
task1.displayTask();
task2.displayTask();
task3.displayTask();
toDo.calculateTotalTask();
