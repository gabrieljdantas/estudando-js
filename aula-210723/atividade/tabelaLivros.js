import { livros } from "./livros.js";
var tabela = document.getElementById("tabelaLivros");


function exibirTabelaLivros() {
    for (var i = 0; i < livros.length; i++) {
        var livro = livros[i];
    
        var linha = tabela.insertRow();
        var tituloCell = linha.insertCell(0);
        var autorCell = linha.insertCell(1);
        var anoPubliCell = linha.insertCell(2);
        var generoCell = linha.insertCell(3);
    
        tituloCell.innerHTML = livro.titulo;
        autorCell.innerHTML = livro.autor;
        anoPubliCell.innerHTML = livro.anoPublicacao;
        generoCell.innerHTML = livro.genero;
    }   
}

exibirTabelaLivros()



