// Função

let n1 = 7;
let n2 = 9;
function somar(){
    console.log(n1 + n2);
}

somar()

function desenharTriangulo(altura) {
    for (let i = 1; i <= altura; i++) {
        let linha = ""
        for (let j = 0; j < altura-i; j++) {
            linha += " ";
            
        }
        for (let j = 0; j < i; j++) {
            linha = linha + "* "
            
        }
        console.log(linha)
        
        
    }
}
desenharTriangulo(3)

