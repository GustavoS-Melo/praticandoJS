const temp = document.getElementById("inputTemp")
let text = document.getElementById("txtTemp")

function tempFah(){
    let tempCels = [(temp.value - 32)* 5]/9;
    console.log(tempCels)
}