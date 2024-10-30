let numeroMaximo = 4;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
let tentativas = 1;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Mind Reader';
//
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Mind Reader');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10:');
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p',`O número secreto é menor!`);
        }else {
            exibirTextoNaTela('p',`O número secreto é maior!`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(numeroMaximo) {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(numeroMaximo);
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

exibirMensagemInicial();


