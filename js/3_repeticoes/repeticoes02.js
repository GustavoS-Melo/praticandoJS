let bolsa = [
    'Notebook', 
    'Moletom',
    'Escova',
    'Celular',
    'Carteira',
    'Carregador',
    'Mouse'
]

for (let i = 0; i < bolsa.lenght; i++) {
    console.log(bolsa[i])
    if (bolsa[i] == 'Carteira') break
}