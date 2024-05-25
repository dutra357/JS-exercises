// const func = function umaFunc() {
//     console.log('executada');
//     console.log(arguments[0])

// }

// func("teste")

// let entrada = function entrada(valor1){
//     let alfa = 0;
//     function interna(valor2){
//         return valor1 * valor2;
//     }
//     return interna;
// }

// const primeira = entrada(5);
// const segunda = primeira(100);

// console.dir(primeira)





function rand(min = 1000, max = 5000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

f1(f2)