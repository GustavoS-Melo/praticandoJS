const nome = 'gustavo';
const sobreNome = 'melo';
const idade = 28;
const peso  = 58;
const alturaEmM = 1.70;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg, tem  ${alturaEmM}m de altura e seu IMC é de: ${imc}`)
console.log(`${nome} ${sobreNome} nasceu em: ${anoNascimento}.`)