const nuns = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];
console.log(nuns)

nuns.push(4); // Adiciona um valor no final do vetor
console.log(nuns)

nuns.unshift(9); // Adiciona um elemento no inicio do vetor
console.log(nuns);

nuns.pop(); //Remove o ultimo elemento do vetor
console.log(nuns)

nuns.shift(); //Remove o primeiro elemento do vetor
console.log(nuns)

let juncao = nuns.join(", ") // Fazer a junção dos elementos do vetor
console.log(juncao)

let vetor2 = [6, 5, 4];
let vetor3 = nuns.concat(vetor2);
console.log(vetor3)

console.log(nuns.sort()) // Ordena de forma ALFABETICA (modifica o vetor)

console.log(nuns.includes(10)) //retorna um boolean

console.log(nuns)
console.log(nuns.reverse()) // Gera um novo vetor com elementos do vetor na ordem reversa (modifica o vetor)

// console.log(nuns.fill(0)) //Preenche todos os elementos com o 0 // modifica o vetor
// console.log(nuns.fill(7, 0, 4))//Preenche 7 de 0 a 4; // modifica o vetor

console.log(nuns.indexOf(3)) // retorna o indice do primeiro elemento do vetor

// console.log(nuns)
// console.log(nuns.splice(6, 3)) //remove elementos do meio do vetor
// console.log(nuns)

// console.log(nuns)
// console.log(nuns.slice(2, 4)) //recorta 

console.log("iteração")
nuns.forEach(num => console.log(num))

console.log(nuns.reduce((acumulador, num) => (acumulador - num)));

console.log(nuns.map(num => (num * 2))) //Multiplica todos os valores por 2

console.log(nuns.find(num => (num > 8))) //retorna o primeiro valor que corresponde a condição

console.log(nuns.filter(num => (num % 2 == 0))) // retorna todos os valores que se encaixam