const valorReal = document.querySelector("input")
    function converter(){
        const valorConvertido = valorReal.value / 5
        alert(`o valor em dolar é ${valorConvertido}`)
    }
    function mudarCor() {
        document.getElementById("titulo").style.color = "red"
    }
    function voltaCor() {
        document.getElementById("titulo").style.display = "none"
    }