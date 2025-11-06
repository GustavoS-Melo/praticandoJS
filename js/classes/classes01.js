//               MANEIRA ANTIGA
//const jogador = function(nome, posicao, numGol){
//     Nome = nome,
//     Posicao = posicao,
//     Gols = numGol

//     this.getNome = function(){
//         return Nome
//     }
//     this.getPos = function(){
//         return Posicao
//     }
//     this.getGol = function(){
//         return Gols
//     }
// }

// const neyney = new jogador('neyney', 'atacante', 400)
// console.log(neyney.getNome())

class jogador {
    constructor(nome, posicao,numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(`o ${this.nome} ja marcou ${this.numGol} em sua carreira`)
    }
}
const neyney = new jogador('neyney', 'atacante', 400)
neyney.golsMarcados()

const pele = new jogador('pele', 'atacante', 1000)
pele.golsMarcados()