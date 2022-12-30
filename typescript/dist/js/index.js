"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 19;
console.log(x);
let y = 0;
let z;
let firstName = "Pelé";
let age = 27;
const isAdmin = true;
console.log(typeof firstName);
firstName = "Maradona";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [1, 'teste', ['a', 'b']];
const user = {
    name: "Messi",
    age: 33
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "000001";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa.size);
let teste;
teste = "algumvalor";
let usuario;
usuario = "autenticado";
usuario = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 6));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Ronaldo"));
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Luciano");
greeting("Calleri", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiNumbers({ n1: 3, n2: 3 }));
const someNumbers = {
    n1: 5,
    n2: 3
};
console.log(multiNumbers(someNumbers));
function doSomenthing(info) {
    if (typeof info == "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomenthing(5);
doSomenthing(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    active;
    constructor(name, role, active) {
        this.name = name;
        this.role = role;
        this.active = active;
    }
    showUserName() {
        console.log(`Nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log("Sem permissão");
    }
}
const zeca = new User("Zeca", "admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
zeca.showUserRole(false);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`Marca: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 3.5);
console.log(a4);
a4.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAT = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const hayley = new Person("Hayley");
console.log(hayley);
