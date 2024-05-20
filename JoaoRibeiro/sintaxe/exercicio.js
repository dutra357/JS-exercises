console.log("Instrução 1");
console.log("Instrução 2");

//inline
/*
Inserindo comentários - multiline
*/
var nome = "Joao Ribeiro";
var idade = 50;
var admin = true;

var cidade;
cidade = "Porto";

console.log(nome);
console.log(cidade);

//Após o ecma6 passou a ser possível declarar LET and CONST
let texto = "Frase em LET";
const pi = 3.14;

var c = 4e+2;


// VAR tem escopo de função
//LET e CONST tem escopo de bloco - não suportadas por navegadores antigos
//Começar variáveis com letras _ ou $
//Nunca começar com números!!

//alert(nome)


let nomes = ["joao", 'ana', 'josefina'];

nomes.push('carlos', 'jose')

//SHIFT remove do início - contraintuitivo
nomes.unshift('INICIO')

//remove ao fim e pega o elemento
nomes.pop();

console.table(nomes.sort())


// //For IN - itera retornando cada índice (valor)
// for(valor in nomes){
//     console.log(valor)
// }

// //For OF itera no elemento (objeto em valor)
// for(valor of nomes){
//     console.log(valor)
// }

//Arrow function - ECMAS6
nomes.forEach((n) => console.log(n))