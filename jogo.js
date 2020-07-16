var altura = 0
var largura = 0

// Recuperando a área visível do navegador
function ajustaTamanhoDoNavegador(){
    altura = innerHeight
    largura = innerWidth
}

ajustaTamanhoDoNavegador()

// Gerando um posição aleatória na tela sem exceder o limite da página considerando o tamanho do mosquito
function posicaoRandomica(){

    // Remover o mosquito anterior caso exista
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()  
    }

    var posicaoX = parseInt(Math.random() * largura) - 90
    var posicaoY = parseInt(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criando o mosquito no html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)

}

// Responsável pelo mosquito mudar de tamanho
function tamanhoAleatorio(){

    var classe = parseInt(Math.random() * 3)

    switch (classe){
        case 0:
            return 'mosquito'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Responsável por mudar o lado do mosquito
function ladoAleatorio(){
    var lado = parseInt(Math.random() * 2)

    switch (lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}