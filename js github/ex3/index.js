let nome = prompt("qual seu nome?");
let idade = prompt("qual sua idade?");
idade = Number(idade)
if( idade >= 18){
    console.log(nome + " vc é maior de idade");
} else{
    console.log(nome + " vc é menor de idade");
};