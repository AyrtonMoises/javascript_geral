// gerar erro quando campo for obrigatorio
function required() {
    throw new Error('Atributo não foi informado.');
}

function soma(a = required(), b = required()) {
    return a + b;
}

console.log(soma(1, 2)); // 3
//console.log(soma(1)); // Uncaught Error: Atributo não foi informado.

// Quando não usar arrow functions
// - Click handlers,  Object methods, Argumentos de um objeto, Prototypes: problemas ao trabalhar com this por causa do escopo
