//Loading da pagina

setInterval(() => {
    loading()
},3000)

function loading(){
    document.getElementById('load').style.display = "none";
    document.getElementsByTagName('header')[0].style.display = 'block'
}
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