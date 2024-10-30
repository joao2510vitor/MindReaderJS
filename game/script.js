let numeroSecreto = gerarNumeroAleatorio(10);
let tentativas = 1;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Mind Reader';
//
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
        exibirTextoNaTela('p',mensagemTentativas);
    }else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p',`O número secreto é menor!`);
        }else {
            exibirTextoNaTela('p',`O número secreto é maior!`);
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio(numeroMaximo) {
    return parseInt(Math.random() * numeroMaximo +1);
}

exibirTextoNaTela('h1','Mind Reader');
exibirTextoNaTela('p','Escolha um numero entre 1 e 10:');


