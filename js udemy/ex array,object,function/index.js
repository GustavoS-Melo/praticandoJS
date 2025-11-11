function meuEscopo(){
    const form = document.querySelector('.form');
    const text = document.querySelector('.text');
    
    const infos = [];
    

    function recebeEventoForm(event){
        event.preventDefault(); // impede o envio do formulario

        //const pessoa ={};

        const nome = form.querySelector('.nome')//.value;
        //pessoa.nome = nome;

        const sobrenome = form.querySelector('.sobrenome')//.value;
        //pessoa.sobrenome = sobrenome;

        const peso = form.querySelector('.peso')//.value);
        //pessoa.peso = peso;

        const altura = form.querySelector('.altura')//.value);
        //pessoa.altura = altura;

        infos.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(infos);
        text.innerHTML += ` seu nome é ${nome.value} ${sobrenome.value}, voce tem ${peso.value} kg e ${altura.value}cm de altura </br>`
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();