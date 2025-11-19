const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);

    // Verificação de valores inválidos
    if (!peso) {
        resultado.innerHTML = '<p>Peso inválido</p>';
        return;
    }

    if (!altura) {
        resultado.innerHTML = '<p>Altura inválida</p>';
        return;
    }

    // Verificação do RANGE DE PESO levando em conta informações da web
    if (peso > 635) {
        resultado.innerHTML = '<p>a pessoa com o maior peso ja registrado é de <strong>635kg</strong>, por favor digite um peso válido'
        return;
    }
    if (peso < 6){
        resultado.innerHTML = '<p>a pessoa com o menor peso ja registrado é de <strong>6kg</strong>, por favor digite um peso válido'
        return;
    }
    // Verificação do RANGE DA ALTURA 
    if (altura < 0.63) {
        resultado.innerHTML = '<p>a pessoa com a menor altura ja registrada é de <strong>63 centimetros</strong>, por favor digite uma altura válido';
        return;
    }
    if(altura > 2.51){
        resultado.innerHTML = '<p>a pessoa com a maior altura ja registrada é de <strong>2.51 metros</strong>, por favor digite uma altura válido';
        return;
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);

    let nivel = '';
    let classe = '';

    if (imc >= 39.9){
        nivel = 'Obesidade grau 3';
        classe = 'imc-obesidade3';
    } 
    else if (imc >= 34.9){
        nivel = 'Obesidade grau 2';
        classe = 'imc-obesidade2';
    } 
    else if (imc >= 29.9){
        nivel = 'Obesidade grau 1';
        classe = 'imc-obesidade1';
    } 
    else if (imc >= 24.9){
        nivel = 'Sobrepeso';
        classe = 'imc-sobrepeso';
    } 
    else if (imc >= 18.5){
        nivel = 'Peso normal';
        classe = 'imc-normal';
    } 
    else{
        nivel = 'Abaixo do peso';
        classe = 'imc-abaixo';
    } 
    
    resultado.innerHTML = `<p class="${classe}">Seu IMC é <strong>${imc.toFixed(2)}</strong> (${nivel})</p> `;
});
