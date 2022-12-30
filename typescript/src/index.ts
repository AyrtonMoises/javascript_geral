let x: number = 10;

x = 19;

console.log(x);

// inferencia (valida pelo primeiro valor dado)
let y = 0;
// y = 'teste';

// annotation (valida pelo type explicitamente)
let z: number
// z = 'teste';

// tipos basicos
let firstName: string = "Pelé"
let age: number = 27
const isAdmin: boolean = true

// String != string
console.log(typeof firstName);

firstName = "Maradona";

console.log(firstName);

// Object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.naoExisto());
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);

// tuple
let myTuple: [number, string, string[]]

myTuple = [1, 'teste', ['a', 'b']]
//myTuple = [1, true, 'c']

// object literals -> {prop: value} (array de chaves, ou dict de dados)
const user: {name: string, age: number } = {
    name: "Messi",
    age: 33
}
// const user: {name: string, age: number } = {
//     name: 123,
//     age: 'trinta'
// }

console.log(user);
console.log(user.name);
//user.job = "developer"

// any  - qualquer tipo como se fosse o js vanilla (nao recomendado)
let a: any = 0;

a = "teste";
a = true;
a = [];

// union type (melhor pratica para tipos diferentes)
let id: string | number = "10";

id = 200;
//id = true;
//id = [] ;

// type alias - cria tipo personalizado e/ou misto
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "000001";
const shirId: myIdType = 123;

// enum - resumir dados

// tamanho de roupas
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}

console.log(camisa.size);

// literal types - obriga valor ser igual
let teste: "algumvalor"

//teste = "outrovalor"
teste = "algumvalor"

let usuario: "autenticado" | null;
usuario = "autenticado"
usuario = null

// tipar funcoes
function sum(a: number, b: number){
    return a + b
}

console.log(sum(1,6))

// tipar saida funcao
function sayHello(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHello("Ronaldo"));

// retonar nada de forma explicita
function logger(msg: string): void{
    console.log(msg)
}

logger("teste");

// argumento opcional
function greeting(name: string, greet?: string): void {
    if (greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("Luciano");
greeting("Calleri", "Sir");

// interfaces - reaproveitar modelo de dados
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 1, n2: 2}));

function multiNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

console.log(multiNumbers({n1: 3, n2: 3}));

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 3
}

console.log(multiNumbers(someNumbers));

//narrowing - checa tipos
function doSomenthing(info: number | boolean){
    if (typeof info == "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomenthing(5);
doSomenthing(true);

// generics - aceita qualquer tipo porem tem q ser um array
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

const a1 = [1,2,3];
const a2 = ["a", "b", "c"];
//const a3 = "teste";

showArraysItems(a1);
showArraysItems(a2);
//showArraysItems(a3);

// classes - atributos da classe recebem tipo via construtor pois senao ficaria redundante
class User {
    name
    role
    active

    constructor(name: string, role: string, active: boolean){
        this.name = name;
        this.role = role;
        this.active = active;
    }

    showUserName(){
        console.log(`Nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void{
        if(canShow){
            console.log(`Idade do usuário é ${this.role}`)
            return;
        }
        console.log("Sem permissão")
    }

}

const zeca = new User("Zeca", "admin", true);

console.log(zeca);

zeca.showUserName();
zeca.showUserRole(true);
zeca.showUserRole(false);

// Interface em classes
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`Marca: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

// heranca
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 3.5);

console.log(a4);

a4.showBrand();

// Decorators - adicionar comportamento a outro objeto

// contructor decorator
function BaseParamters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAT = new Date();
        }
    }
}

@BaseParamters()
class Person {
    name;

    constructor(name: string){
        this.name = name;
    }
}

const hayley = new Person("Hayley");

console.log(hayley);