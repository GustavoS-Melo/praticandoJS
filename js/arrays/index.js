let frutas = ["maçã", "banana", "laranja"];
let num = [10, 20, 30, 40];
let misto = [42, "texto", true, null];

//constrututor newArray
let idades = new Array(25, 30, 45); //cria um array vazio com 3 posições indefinidas, não com o número 3 dentro

// acessando elementos do array
let cores = ["vermelho", "verde", "azul"];
console.log(cores[0]); 
console.log(cores[2]); 

//modificando arrays
let carros = ["Ford", "Fiat", "BMW"];

carros[1] = "Chevrolet";
console.log(carros); // ["Ford", "Chevrolet", "BMW"]

// retorna o tamanho do array
let numeros = [1, 2, 3, 4];
console.log(numeros.length); // 4


// adicionando elementos
let frutas1 = ["maçã", "banana"];

// Adiciona no final
frutas.push("laranja"); // ["maçã", "banana", "laranja"]

// Adiciona no início
frutas.unshift("uva"); // ["uva", "maçã", "banana", "laranja"]


// removendo elementos
frutas.pop();    // remove o último ("laranja")
frutas.shift();  // remove o primeiro ("uva")


// remobendo ou substituindo
let nomes = ["Ana", "Bruno", "Carlos", "Diana"];
nomes.splice(1, 2); // remove 2 elementos a partir do índice 1
console.log(nomes)


//encontrando elementos
let nums = [10, 20, 30, 40];

nums.indexOf(20); // 1
nums.includes(50); // false


// iterando elementos for
let numeros1 = [1, 2, 3];
for (let i = 0; i < numeros1.length; i++) {
  console.log(numeros1[i]);
}


//iterando elementos forOf
for (let numero of numeros1) {
  console.log(numero);
}


// forEach
numeros1.forEach((valor, indice) => {
  console.log(`${indice}: ${valor}`);
});


// transformando elementos map()
let numeros2 = [1, 2, 3];
let dobrados = numeros2.map(n => n * 2);
console.log(dobrados); // [2, 4, 6]


// filtrando elementos filter()
let maiores = numeros2.filter(n => n > 1);
console.log(maiores); // [2, 3]


// reduzindo o array a um único valor (ex: somar todos os números).
let soma = numeros2.reduce((total, n) => total + n, 0);
console.log(soma);// 6
