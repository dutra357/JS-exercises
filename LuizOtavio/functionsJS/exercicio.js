//Lazy evaluation - função geradora

function* generator() {
    yield 1;
}

let teste = generator();
console.log(teste.next().value)


let num = 123['toString']()
console.log(num)



let nomes = ['Laura', 'Joana', 'Maria', 'Joana', 'Josoaldo']
console.log(nomes.slice(0,2))

let nomeCompleto = 'Luiz Otavio Miranda'
console.log(nomeCompleto.split(' '))

console.log(nomes.join(', '))


//splice - passando o índice de inicio, segundo o n de el a remover
//splice retorna os removidos
//Seg arg sendo 0, adiciona no array o 3 argumento (string)
let nomes2 = nomes.splice(2, 0, 'LUIZ  ')
console.log(nomes)