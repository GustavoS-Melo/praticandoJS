const selecionaParagrafo = document.querySelector('.paragrafos');
const paragrafo = selecionaParagrafo.querySelectorAll('p');

const estiloDoc = getComputedStyle(document.body);
const backgroundColorBody = estiloDoc.backgroundColor;

for (let p of paragrafo){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#fff'
}