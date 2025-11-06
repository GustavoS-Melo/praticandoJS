function gift(dinheiro, valor) {
    if (dinheiro < valor) {
        return `nao vai da nao`
    } else {
        return `seriao?`
    }
}

let x = gift (500,90)
console.log(x)