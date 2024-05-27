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

testCpf('05086925983')