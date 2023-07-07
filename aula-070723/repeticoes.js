

//Desenha um quadrado de # na tela

// let lado = 7;

// for(let i = 0; i < lado; i++){
//     let linha = "";
//     for (let j = 0; j < lado; j++) {
//         linha += "# "
        
//     }
//     console.log(linha)
// }
// console.log("============================")

// let linha = "";
// for (let i = 0; i < lado; i++) {
//     linha += "# ";  
// }

// for (let i = 0; i < lado; i++) {
//     console.log(linha)
// }

//break e continue

for(let i = 1; i <= 20; i++){
    if (!(i % 2 == 0)) {
        continue
    }
    console.log(i);
}