//Loading da pagina

setInterval(() => {
    loading()
},500)

function loading(){
    document.getElementById('load').style.display = "none";
    document.getElementsByTagName('header')[0].style.display = 'block'
}

//Menu
//const menu = document.querySelector('.icon')
//function color(){
    //menu.style.color = 'blue'
//}

const menu =  document.querySelector('.nav-menu')
const contentMenu =  document.querySelector('.nav-mobile')
const main = document.querySelector('.main')

menu.addEventListener('click' , () => {
    contentMenu.classList.toggle('nav-mobile-menu')
    main.classList.toggle('opaco')
})

//Slider principal

const next = document.querySelector('.carousel-control-next')
const prev = document.querySelector('.carousel-control-prev')
document.querySelector('#radio1').checked = true

let contador = 1

setInterval(() => {
    proximaImg()
},4000)

function proximaImg() {
    contador++;

    if(contador > 5){
        contador = 1
    }

    document.getElementById('radio'+contador).checked = true
}

function anteriorImg(){
    contador--;

    if(contador < 0){
        contador = 5
    }

    document.getElementById('radio'+contador).checked = true
}

next.addEventListener('click', () => {
    proximaImg()
})

prev.addEventListener('click', () => {
    anteriorImg()
})