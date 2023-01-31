// data de hoje completa
const hoje = new Date()

// data de hoje
dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date

console.log(
    "Hoje é " + dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear ()
)

// Criando datas
const aniversario1 = new Date("December 17, 1950 03:24:00");
const aniversario2 = new Date("1950-12-17T03:24:00");
const aniversario3 = new Date(1950, 11, 17);

console.log(aniversario1)
console.log(aniversario2)
console.log(aniversario3)


// algumas funcoes

// para testar uma função e obter o seu retorno

function tempoDecorrido() {

    let fim = new Date().getTime();
  
    let tempo = fim - inicio;
  
    console.log('Tempo de execução: ' + tempo);
  }
  
  let inicio;
  
  function idade() {
  
    inicio = new Date().getTime();
  
    /* a função deve ser chamada no fim da "idade", 
     * mas aqui chamamos após 1 segundo, para simular
     * que estivemos a trabalhar durante esse tempo
     */
    setTimeout(tempoDecorrido, 1000);
  }
  
  idade();


function diasDoMes(mes, ano){
    return new Date(ano, mes, 0).getDate()
}
console.log(diasDoMes(2, 2024)) // 29
console.log(diasDoMes(12, 2023)) // 31

// diferença entre datas
const agora = new Date(); // Data de hoje
const passado = new Date('2014-07-07'); // Outra data no passado
const diferenca = Math.abs(agora.getTime() - passado.getTime()); // Subtrai uma data pela outra
const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

// Mostra a diferença em dias
console.log('Entre 07/07/2014 até agora já se passaram ' + dias + ' dias');

// String para Date

let data = '30/03/2019';

// Precisamos quebrar a string para retornar cada parte
const dataSplit = data.split('/');

const day = dataSplit[0]; // 30
const month = dataSplit[1]; // 03
const year = dataSplit[2]; // 2019

// Agora podemos inicializar o objeto Date, lembrando que o mês começa em 0, então fazemos -1.
data = new Date(year, month - 1, day);
console.log(data)