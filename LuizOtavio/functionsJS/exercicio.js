//Lazy evaluation - função geradora

function* generator() {
    yield 1;
}

let teste = generator();
console.log(teste.next().value)


let num = 123['toString']()
console.log(num)


let nomes = ['Laura', 'Joana', 'Maria', 'Fabio', 'Josoaldo']
console.log(nomes.slice(0,2))


let nomeCompleto = 'Luiz Otavio Miranda';
let split = nomeCompleto.split(' ');


//splice - passando o índice de inicio, segundo o n de el a remover
//splice retorna os removidos
//Seg arg sendo 0, adiciona no array o 3 argumento (string)
let nomes2 = nomes.splice(0, 0, 'Adalberto')



//FILTER filtra array, map modifica, e reduce o reduz
//a função de callback, a ser aplicada, deve retornar true para os valores de interesse
let filtrar = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 17]

function call(valor) {
    if (valor % 2 == 0) {
        return true;
    }else return false;
}

let filtrados = filtrar.filter(call)

console.log(filtrados)
