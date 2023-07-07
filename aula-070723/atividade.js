//Escreva um programa que imprima os números de 1 a 20 usando um loop for.
// console.log("1 a 20")
// for (let i = 1; i <= 20; ++i) {
//     console.log(i);
    
// }
console.log("+==============================+")

//Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência. 

// console.log("Fibonacci")
// cont = 0;
// //Valor que vou usar pra somar
// let anterior = 0;
// //Valor principal que vai ser impresso
// let sequencia = 0;
// //Variavel para somar com anterior sem perder o valor da sequencia, pois eu tenho que atribuir a variavel anterior a variavel sequencia.
// let i = 0
// console.log(sequencia)
// while(cont < 10){
//     if (sequencia == 0) {
//         sequencia++
//         cont++
//         console.log(sequencia)
//     }
//     else{
//         i = sequencia;
//         i += anterior;
//         anterior = sequencia;
//         sequencia = i;
//         console.log(sequencia);
//         cont++
//     }
// }
console.log("+==============================+")

//Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar

// console.log("Sequencia impares")
// let numero = 100;

// for (let i = 0; i < numero; i++) {
//     if (i % 2 == 0){
//         continue
//     }
//     console.log(i)
// }

console.log("+==============================+")

//Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.

// let numero = 5;

// for (let i = 1; i <= 10; i++) {
//     soma = numero + i;
//     console.log("numero" +  " + " + i + " = " + soma)
    
// }

console.log("+==============================+")

//Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.

// for (let i = 1; i < 100; i++) {
//     if (i % 7 == 0) {
//         console.log(i)
//     }
    
// }

console.log("+==============================+")

//Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".

// let numero = 3
// let linha = "* "
// for (let i = 0; i < numero; i++) {
//     console.log(linha);
//     linha += "* "
    
// }


//Desenhar um quadrado com o interior oco

let lado = 5;

for (let i = 0; i < lado; i++) {  
    let linha = "";
    for (let j = 0; j < lado; j++) {

        if (i == 0 || i == lado - 1 || j == 0 || j == lado - 1){
            linha += "@"
        }
        else{
            linha += " ";
        }
        
    }  
    console.log(linha)
    
    
}