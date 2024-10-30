alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
let chute;
let tentativas = 1;
console.log(numeroSecreto);

//enquanto numeroSecreto for diferente de chute continua
while(numeroSecreto != chute){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
    } else{
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        }else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas ++;
    }
}
//Operador ternario.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);





