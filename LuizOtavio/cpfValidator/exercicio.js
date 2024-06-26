//Validador de CPF - 9 números e 2 dígitos
function testCpf(cpf) {
    let entity = Array.from(cpf.replace(/\D+/g, ''));
    cpfArray = entity.map((x) => +x);

    let count = 0;
    for (i = 0; i < 9; i++) {
        count += cpfArray[i] * (10 - i);
    }

    let firstDigit = 11 - (count % 11);
    if (firstDigit > 9) firstDigit = 0;

    count = 0;
    for (i = 0; i < 10; i++) {
        count += cpfArray[i] * (11 - i);
    }

    let secondDigit = 11 - (count % 11);
    if (secondDigit > 9) firstDigit = 0;

    if ((cpfArray[10] != secondDigit) || 
    (cpfArray[9] != firstDigit)) {
        console.log('CPF Inválido!');
    } else {console.log('CPF validado!')};

}

//Polimorfismo
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.saldo = saldo;
    this.conta = conta;
}

Conta.prototype.saque = function(valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente!');
        return;
    }
    this.saldo -= valor;
}

Conta.prototype.deposito = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(this.saldo)
}





function ContaCorrente(agencia, conta, saldo, limite) {
    //Herança
    Conta.call(this, agencia, conta, saldo);

    this.limite = limite;

}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//Polimorfismo-override (sobrescrita)
//Polimorfismo de sobrecarga não tem em JS
ContaCorrente.prototype.saque = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('limite excedido!');
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

const cc = new ContaCorrente(11, 22, 0, 100);



const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    
    //Atribuição via desestruturação
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
    
}

console.log(novasPessoas)