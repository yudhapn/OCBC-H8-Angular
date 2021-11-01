const hello: string = "Hello World!";
console.log(hello);

let address: string = "Kebayoran";
// address = 105 <= Type ''number' is not assignable to type 'string'.

// Anotasi tipe di params function
function getProfileTs(name: string, age: number) {
  console.log(`Hello, ${name}!, your age is ${age} old`);
}

// getProfileTs("Bobi"); <= Expected 2 arguments, but got 1

let age: number = 10;
// anotasi multi tipe data varable
let item: number | string = 105;
let isActive: boolean;

// cara anotasi tipe di array
let itemTs: string[];
itemTs = ["Sepatu", "Sendal", "Tas"];
let itemTs2: (string | number | boolean)[];
itemTs2 = ["Sepatu", "Sendal", false, 1, 2];

// cara anotasi tipe di object
let personTS: {
  name: String;
  age: number;
} = {
  name: "Maryam",
  age: 10,
};

let personTS2: {
  name: String;
  age: number | string;
} = {
  name: "Bobi",
  age: "10",
};

let personTS3: {
  name: String;
  age?: number | string;
} = {
  name: "Bobi",
};

interface Phone {
  brand: string;
  merk: string;
  type: string;
  price: number;
  features?: string[];
}

let myPhone: Phone[] = [
  {
    brand: "Apple",
    merk: "Iphone",
    type: "Iphone 12 Pro",
    price: 20000000,
    features: ["iOS 14", "Super Retina Display"],
  },
  {
    brand: "Samsung",
    merk: "Samsung",
    type: "Samsung Note Galaxy",
    price: 20000000,
  },
];

// anotasi tipe dalam properti class
class Customer {
  name: string;
  age: number;
  money: number;
  items: string[] = ["buku", "laptop"];

  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }

  updateDataMoney(money: number) {
    this.money = money;
  }

  addItem(itemName: string) {
    this.items.push(itemName);
  }
}

const raihan = new Customer("raihan", 12, 50000);
raihan.updateDataMoney(100000);
raihan.addItem("smartphone");
console.log(raihan);

// anotasi tipe dalam properti class
class Shop {
  customers: Customer[] = [];

  addCustomer(newCustomer: Customer) {
    this.customers.push(newCustomer);
  }
}

const shopE = new Shop();
shopE.addCustomer(raihan);
console.log(shopE);

// ts modifier

class Employee {
  private code: string;

  constructor(private name: string) {
    this.name = name;
  }

  getCode() {
    return this.code;
  }
}

class SalesEmployee extends Employee {
  getSalesCode() {
    // return `sales ${this.name} + ${this.code}`
    //  error karena modifier properti name pada class Employee adalah private
  }
}
