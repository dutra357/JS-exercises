//Lazy evaluation - função geradora

function* generator() {
    yield 'Valor 1';

    yield 'Valor 2';

    yield 'Valor 3';
}

let teste = generator();
console.log(teste.next().value)
console.log(teste.next())
console.log(teste.next())
console.log(teste.next()) //DONE-true