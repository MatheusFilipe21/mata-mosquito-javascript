var altura = 0
var largura = 0

// Recuperando a área visível do navegador
function ajustaTamanhoDoNavegador(){
    altura = innerHeight
    largura = innerWidth
}

ajustaTamanhoDoNavegador()

// Gerando um posição aleatória na tela sem exceder o limite da página considerando o tamanho do mosquito
var posicaoX = parseInt(Math.random() * largura) - 90
var posicaoY = parseInt(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

// Criando o mosquito no html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = 'mosquito'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)