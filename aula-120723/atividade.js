// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.

// function mediaPonderada(n1, n2, n3) {
//     return ((n1 *2 + n2 * 3 + n3 * 4) / 9);
// }

// console.log(mediaPonderada(6, 7, 8))

// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número.

// function numDivisores(num) {
//     let qnt = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             qnt++;
//         }
//     }
//     return qnt;
// }

// console.log(numDivisores(20));

// Crie uma função que calcule a soma de todos os dígitos de um número.

// function numDigitos(num) {
//     let numTexto = num.toString();
//     let acumulador = 0;
//     for (let i = 0; i < numTexto.length; i++) {
//         acumulador += parseInt(numTexto.charAt(i)); 
//     }
//     return acumulador;
    
// }
// console.log(numDigitos(1234));

//Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média.
// function velocidadeMedia(comprimento, tempo) {
//     return (comprimento / tempo);
    
// }
// console.log("30km em 2hrs: " +velocidadeMedia(30, 2))

//Crie uma função que receba uma string e retorne outra string com todas as vogais removidas.

function isVogal(char) {
    switch (char) {
        case "a": 
        case "e":
        case "é":
        case "i":
        case "o":
        case "u": 
            return true;   
    }
    return false;
    
}

function removeVogais(texto) {
    let textoSemVogal = "";
    for (let i = 0; i <texto.length; i++) {
        let char = texto.charAt(i);
        if (!isVogal(char)) {
            textoSemVogal += char;
        }
        
    }
    return textoSemVogal;
    
}

console.log("Meu nome e Gabriel : " + removeVogais("Meu nome é Gabriel"))
