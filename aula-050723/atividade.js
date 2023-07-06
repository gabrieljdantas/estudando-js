//Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
console.log("positivo, negativo ou zero?")
let num1 = 0;
if (num1 == 0){
    console.log("numero 0")
}
else if (num1 > 0){
    console.log("Numero positivo")
}
else{
    console.log("Numero negativo")
}

//Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.

console.log("idade de uma pessoa, é maior de idade?")

let num2 = 18;
if (num2 >= 18){
    console.log("Maior de idade")
}
else{
    console.log("Menor de Idade")
}

//Escreva um programa que receba três números e determine qual deles é o maior.
console.log("três números e determine qual deles é o maior.")
let a = 2;
let b = 4;
let c = 5;

if (a > b && a > c){
    console.log(a + " é o maior numero!")
}
else if(b > a && b > c){
    console.log(b + " é o maior numero!")
}
else{
    console.log(c + " é o maior numero!")
}

//Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
console.log("dois números e verifique se seu produto é par ou ímpar?")
let num4 = 2;
if (num4 % 2 == 0){
    console.log("numero par")
}
else{
    console.log("Numero impar")
}

//Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.

console.log("dois números e verifique se seu produto é par ou ímpar?")
let dia = "sexta";
if (dia == "segunda" || dia == "terca" || dia == "quarta" || dia == "quinta" || dia == "sexta"){
    console.log("O dia é " + dia + ". Então é dia util")
}
else if(dia == "sabado" || dia == "domingo"){
    console.log("O dia é " + dia + ". Então é fim de semana")
}

//Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).

console.log("receba um número de 1 a 7 e exiba o dia da semana correspondente")
let dia2 = 4;
switch (dia2) {
    case 1:
        console.log(dia2 + " - Domingo")
        break;
    case 2:
        console.log(dia2 + " - Segunda")
        break;
    case 3:
        console.log(dia2 + " - Terça")
        break;
    case 4:
        console.log(dia2 + " - Quarta")
        break;
    case 5:
        console.log(dia2 + " - Quinta")
        break;
    case 6:
        console.log(dia2 + " - Sexta")
        break;
    case 7:
        console.log(dia2 + " - Sabado")
        break;
    default:
        break;
}