//Lazy evaluation - função geradora

function* generator() {
    yield 1;
}

let teste = generator();
console.log(teste.next().value)


let num = 123['toString']()
console.log(num)



let nomes = ['david', 'joana', 'maria', 'joana']
console.log(nomes.slice(0,2))

let nomeCompleto = 'Luiz Otavio Miranda'
console.log(nomeCompleto.split(' '))

console.log(nomes.join(', '))