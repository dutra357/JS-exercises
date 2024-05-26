//Lazy evaluation - função geradora

function* generator() {
    yield 1;
}

let teste = generator();
//console.log(teste.next().value)


let num = 123['toString']()
//console.log(num)


let nomes = ['Laura', 'Joana', 'Maria', 'Fabio', 'Josoaldo']
//console.log(nomes.slice(0,2))


let nomeCompleto = 'Luiz Otavio Miranda';
let split = nomeCompleto.split(' ');


//splice - passando o índice de inicio, segundo o n de el a remover
//splice retorna os removidos
//Seg arg sendo 0, adiciona no array o 3 argumento (string)
let nomes2 = nomes.splice(0, 0, 'Adalberto')



//FILTER filtra array, map modifica, e reduce o reduz
//a função de callback, a ser aplicada, deve retornar true para os valores de interesse
let base = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 17]

function call(valor) {
    if (valor % 2 == 0) {
        return true;
    } else return false;
}

function dobra(valor) {return valor % 2 == 0}

let filtrados = base.filter(dobra)
//console.log(filtrados)



//MAP - aqui o array de saída pode ser maior - altera os valores do array
//ele altera os valores processados

let mapear = base.map(x => 2 * x)
//console.log(mapear)


//REDUCE reduz um array a um único elemento. no primeiro par recebe um acumulador
// (acum, valor, indice, array)

let reduzido = base.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);

base.forEach((x, y) => console.log(x, y))
