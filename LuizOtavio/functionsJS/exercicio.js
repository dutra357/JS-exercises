//Lazy evaluation - função geradora

function* generator() {
    yield 1;
}

let teste = generator();
console.log(teste.next().value)


let num = 123['toString']()
console.log(num)