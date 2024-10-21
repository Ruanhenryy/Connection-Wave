//Carrossel principal
document.querySelector('#radio1').checked = true
let contador = 1

setInterval(() => {
    proximaImg()
},8000)

function proximaImg() {
    contador++;

    if(contador > 5){
        contador = 1
    }

    document.getElementById('radio'+contador).checked = true
}