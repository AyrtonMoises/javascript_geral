
// console
console.info('mensagem')
console.log('sou um log')
console.warn('é um aviso')
console.error('é um erro')

// variaveis
var x = 10

// mais moderno
let y = 15

// inalteravel
const z = 20 

// preso ao escopo
if (true){
    let y = 55
    console.log(y)
}

console.log(x,y,z)

// alguns tipos 
const nome = 'pelé'
console.log(typeof nome)

// objeto
const user = {email: "email@teste", username: "myusername"}
console.log(user)
console.log(typeof user)

// array que tambem e considerado objeto
const languages = ["Python", "JS", "PHP"]
console.log(languages)
console.log(typeof languages)

// metodos string
const fullName = "Rogerio Ceni"
console.log(fullName.length)

const stringToArray = fullName.split(' ')
console.log(stringToArray)

console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())

console.log(fullName.indexOf('Ceni')) // diferencia maiuscula e minuscula
console.log(fullName.indexOf('zzzz')) // senao existe retorna -1

console.log(fullName.slice(0, 7)) // corta string

// metodos array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length)

// adiciona na chave especifica
console.log(list[2])
list[5] = 'f'
console.log(list)

// adiciona ao final
list.push('g')
console.log(list)

// mostra ultimo
console.log(list[list.length - 1])

// lista remove ultimo
list.pop()
console.log(list)

// lista remove primeiro
list.shift()
console.log(list)

// add primeiro elemento
list.unshift('a')
console.log(list)

// objetos
const product = {
    name: 'Camisa',
    price: 15.99,
    inStock: true,
    size: ['P', 'M', 'G'],
    'Main color': 'Blue'
}

console.log(product.name)
console.log(product['name'])
console.log(product['Main color'])

// destructuring criando variaveis a partir de propriedades de objeto
const {price, inStock} = product

// maneira antiga
//const price = product.price
//const inStock = product.inStock

console.log(price, inStock)

const [n1, n2] = list
console.log(n1, n2)

//JSON 
const dog = {
    name: "Shark",
    age: 10
}

// obj para json
const json = JSON.stringify(dog)
console.log(json)

// json para obj
const obj = JSON.parse(json)
console.log(obj)

// Exemplos de erros
//const jsonErrado = '{"name":"teste", "surname":Testando}' // sem aspas
//const jsonErrado = '{"name":"teste", "surname":"Testando",}' // se tiver virgual tem q ter propriedade
//const obj2 = JSON.parse(jsonErrado)
//console.log(obj2)

// Estruturas condicionais

// >, >=, <, <=, 

const b = "calleri"

// valida valor e tipo ===
if(b === "luciano"){
    console.log("nome é luciano")
} else if (b === "mendez"){
    console.log("nome é mendez")
} else {
    console.log("nome nao encontrado")
}

const someNumber = 14

// ternario
let testingNumber = someNumber < 20 ? 'Yes' : 'No'
console.log(testingNumber)


// estruturas de repeticao - loop
const myList = [1, 2, 3, 4, 5]
let counter = 0

while(counter < myList.length){
    console.log('Imprimindo: ' + myList[counter])
    counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for(let counter = 0; counter < mySecondList.length; counter++){
    console.log(`Imprimindo: ${mySecondList[counter]}`)
}

// metodo array -> repeticao
const names = ['Calleri', 'Luciano', 'Mendez', 'Pablo Maia']

// Busca valor em array
console.log('Resultado busca:', names.includes('Mendez'))

// foreach
names.forEach((name) => {
    console.log(name)
})

// map
const modifiedNames = names.map((name) => {
    if (name === 'Luciano'){
        return 'Sr. Luciano'
    }else{
        return name
    }
    
})
console.log(modifiedNames)

// filter onde retorna a lista somente se for true, se usasse map iria aparecer undefinied
const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter((number) => {
        return number >= 5
})
console.log(bigNumbers)

// reduce retorna valor unico
const sumAll = [10, 20, 30, 40, 50].reduce((total, number) => {
    return total + number
})
console.log(sumAll)

// funções

function nomeCompleto(nome, sobrenome){
    return `meu nome completo e ${nome} ${sobrenome}`
}

console.log(nomeCompleto('Rean', 'Swearzard'))

// arrow funcions
const myArrow = (a, b) => {
    return a + b
}
console.log(myArrow(5,5))

// sem chaves e return, somente para funcoes muito simples
const simpleArrowFunction = (a,b) => a * b

console.log(simpleArrowFunction(3, 3))

// classes
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    
    productDetails(){
        return `nome: ${this.name} preço: ${this.price}`
    }
}

const socks = new Product('Meia branca', 10.99)
const shirt = new Product('Camisa preta', 99.99)

console.log(socks.name)
console.log(shirt.name)
console.log(socks.productDetails())


// herança
class SuperProduct extends Product{
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }
    showAdjective(adjective){
        return `O ${this.name} é muito ${adjective}`
    }
    // static
    static sayHello(){
        console.log("Hello")
    }

}

const tenis = new SuperProduct('Tênis vermelho', 59.90, '42')

console.log(tenis.name)
console.log(tenis.size)
console.log(tenis.showAdjective('bom'))

SuperProduct.sayHello()

// DOM - Document object Model
//Selecao de elementos
const title = document.getElementById("title") //#title
console.log(title)

// query selector
const sameTitle = document.querySelector("#title")
console.log(sameTitle)

const texts = document.querySelectorAll('.text')
console.log(texts)
console.log(texts[1])

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

// Manipular valor
title.textContent = "Mudei o texto"

// manipular html
texts[0].innerHTML = '<span>Alteramos o HTML</span>'

texts[1].style.backgroundColor = 'red'

texts[3].remove()

// trocar estilos
texts[2].classList.add('my-class')
texts[2].classList.remove('text')

// eventos
const btn = document.querySelector('#btn')

btn.addEventListener("click", () => {
    console.log('clicou')
    texts[2].style.color = 'blue'
})