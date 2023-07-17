class Livro {  
    titulo = "Titulo";
    paginas = 0;
    autor = "autor";
    volume = 0;
    isbn = "000000000000";
    alugar = function(){
        console.log("Alugado")
    }
    
    constructor(titulo, paginas, autor, volume, isbn) {
        this.titulo =titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.volume = volume;
        this.isbn = isbn;
    }
}


let arquiteturaLimpa = new Livro();
// console.log(arquiteturaLimpa)

arquiteturaLimpa.titulo = "Arquitetura Limpa"
arquiteturaLimpa.autor = "Robert C. Martin"
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.isbn = "978-85-508-460-6"
// console.log(arquiteturaLimpa);
// arquiteturaLimpa.alugar()


let JavaIniciantes = new Livro("Java Iniciantes", 200, "Herneet", 2, "983-85-508-460-6");
console.log(JavaIniciantes)
