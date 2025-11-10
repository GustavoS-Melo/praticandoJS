const numero = Number(prompt('digite um numero'));
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('text');

numberTitle.innerHTML = numero;

text.innerHTML = `a raiz quadrada do numero escolhido é: ${numero ** 0.5}</br>`
text.innerHTML += `${numero} é um numero inteiro? ${Number.isInteger(numero)}</br>`
text.innerHTML += `${numero} é um NaN? ${Number.isNaN(numero)}</br>`
text.innerHTML += `${numero} arredondado para baixo ficaria ${Math.floor(numero)}</br>`
text.innerHTML += `${numero} arredondado para cima ficaria ${Math.ceil(numero)}</br>`//text.innerHTML = `<p>a raiz quadrada do numero escolhido é: ${}</p></br>`
text.innerHTML += `${numero} com duas casas decimais fica: ${numero.toFixed(2)} `