const vetor1 = [1, 3, 5, 7, 9];
const vetor2 = [2, 4, 5, 6, 10];
const vetor3 = [3, 6, 9, 12, 15];
const vetor4 = [1, 5, 10, 15, 20];

const matriz = [vetor1, vetor2, vetor3, vetor4];

// console.log(vetor1[0]);
// console.log(matriz[0][3]);

const matriz3d = [
    [
        [4, 5],
        [3, 6]
    ],
    [
        [2, 7],
        [9, 10]
    ]
]
// console.log(matriz3d[0][1][1]);
// console.log(matriz3d[0][0][1]);

const matriz3x3 = [
    [1, 8, 4, 5],
    [2, 7, 9, 10],
    [10, 15, 20, 22]
]

for (let i = 0; i < matriz3x3.length; i++) {
    for (let j = 0; j < matriz3x3[i].length; j++) {
        console.log(matriz3x3[i][j])
    }
    
}

console.log(matriz3x3)