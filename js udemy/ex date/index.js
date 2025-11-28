const dataHoje = new Date();
let diaSemana = dataHoje.getDay();
let diaMes = dataHoje.getDate();
let mes = dataHoje.getMonth();
let ano = dataHoje.getFullYear();
const hora = zeroEsq(dataHoje.getHours());
const minuto = zeroEsq(dataHoje.getMinutes());

// corrige number p/ string
if (diaSemana === 0){diaSemana = 'domingo'}
else if (diaSemana === 1){diaSemana = 'segunda-feira'}
else if (diaSemana === 2){diaSemana = 'terça-feira'}
else if (diaSemana === 3){diaSemana = 'quarta-feira'}
else if (diaSemana === 4){diaSemana = 'quinta-feira'}
else if (diaSemana === 5){diaSemana = 'sexta-feira'}
else if (diaSemana === 6){diaSemana = 'sabádo'}

if(mes === 0){mes = 'janeiro'}
else if (mes === 1){ mes = 'fevereiro'}
else if (mes === 2){ mes = 'março'}
else if (mes === 3){ mes = 'abril'}
else if (mes === 4){ mes = 'maio'}
else if (mes === 5){ mes = 'junho'}
else if (mes === 6){ mes = 'julho'}
else if (mes === 7){ mes = 'agosto'}
else if (mes === 8){ mes = 'setembro'}
else if (mes === 9){ mes = 'outubro'}
else if (mes === 10){ mes = 'novembro'}
else if (mes === 11){ mes = 'dezembro'}

// adiciona 0 a esquerda
function zeroEsq(n) {
    return n < 10 ? "0" + n : n;
}

//exibe no html
const mudaTxt = document.querySelector('.container');

mudaTxt.innerHTML = `Hoje é ${diaSemana}, dia ${diaMes} de ${mes} de ${ano}, e a hora exata é ${hora}:${minuto}`;
