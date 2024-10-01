// let titulo = document.querySelector("h1");
// titulo.innerHTML = "jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "escolha um número entre 1 e 10";
let lista = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// numeroSecreto = 5;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  //responsive voice no html, para ter fala
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.1 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "jogo do número secreto");
  exibirTextoNaTela("p", "escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantLista = lista.length;
  if (quantLista == numeroLimite) {
    lista = [];
  }
  if (lista.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    lista.push(numeroEscolhido);
    console.log(lista);
    return numeroEscolhido;
  }
}
//push poe e pop tira

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
