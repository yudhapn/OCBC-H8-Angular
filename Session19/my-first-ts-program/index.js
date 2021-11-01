var hello = "Hello World!";
console.log(hello);
var address = "Kebayoran";
// address = 105 <= Type ''number' is not assignable to type 'string'.
// Anotasi tipe di params function
function getProfileTs(name, age) {
    console.log("Hello, " + name + "!, your age is " + age + " old");
}
// getProfileTs("Bobi"); <= Expected 2 arguments, but got 1
var age = 10;
// anotasi multi tipe data varable
var item = 105;
var isActive;
// cara anotasi tipe di array
var itemTs;
itemTs = ["Sepatu", "Sendal", "Tas"];
var itemTs2;
// cara anotasi tipe di object
var personTS = {
    name: "Maryam",
    age: 10
};
var personTS2 = {
    name: "Bobi",
    age: "10"
};
var personTS3 = {
    name: "Bobi"
};
var myPhone = [
    {
        brand: "Apple",
        merk: "Iphone",
        type: "Iphone 12 Pro",
        price: 20000000,
        features: ["iOS 14", "Super Retina Display"]
    },
    {
        brand: "Samsung",
        merk: "Samsung",
        type: "Samsung Note Galaxy",
        price: 20000000
    },
];
// anotasi tipe dalam properti class
var Customer = /** @class */ (function () {
    function Customer(name, age, money) {
        this.items = ["buku", "laptop"];
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Customer.prototype.updateDataMoney = function (money) {
        this.money = money;
    };
    Customer.prototype.addItem = function (itemName) {
        this.items.push(itemName);
    };
    return Customer;
}());
var raihan = new Customer("raihan", 12, 50000);
raihan.updateDataMoney(100000);
raihan.addItem("smartphone");
console.log(raihan);
// anotasi tipe dalam properti class
var Shop = /** @class */ (function () {
    function Shop() {
        this.customers = [];
    }
    Shop.prototype.addCustomer = function (newCustomer) {
        this.customers.push(newCustomer);
    };
    return Shop;
}());
var shopE = new Shop();
shopE.addCustomer(raihan);
console.log(shopE);
