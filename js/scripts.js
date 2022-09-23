const operacaoAnteriorText = document.querySelector("#operacao-anterior");
const operacaoAtualText = document.querySelector("#operacao-atual");
const buttons = document.querySelectorAll("#buttons-container button");

class calculador {
  constructor(operacaoAnteriorText, operacaoAtualText) {
    this.operacaoAnteriorText = operacaoAnteriorText;
    this.operacaoAtualText = operacaoAtualText;
    this.operacaoAtual = "";
  }
  //Adiciona digito no visor
  adicionaDigito(digito) {
    // Verifica se a atual operação já existe um ponto
    if (digito === "." && this.operacaoAtualText.innerText.includes(".")) {
      return;
    }
    this.operacaoAtual = digito;
    this.telaAtualiza();
  }

  //Processa todas as operações
  processandoOperacao(operacao) {
    //Verifica se a atual esta vazia
    if (this.operacaoAtualText.innerText === "" && operacao !== "C") {
      //Muda operação
      if (this.operacaoAnteriorText.innerText !== "") {
        this.mudaOperacao(operacao);
      }
      return;
    }
    //Pegando valor atual e valor anterior
    let operacaoValor;
    const anterior = +this.operacaoAnteriorText.innerText.split(" ")[0];
    const atual = +this.operacaoAtualText.innerText;

    switch (operacao) {
      case "+":
        operacaoValor = anterior + atual;
        this.telaAtualiza(operacaoValor, operacao, atual, anterior);
        break;

      case "-":
        operacaoValor = anterior - atual;
        this.telaAtualiza(operacaoValor, operacao, atual, anterior);
        break;

      case "/":
        operacaoValor = anterior / atual;
        this.telaAtualiza(operacaoValor, operacao, atual, anterior);
        break;

      case "*":
        operacaoValor = anterior * atual;
        this.telaAtualiza(operacaoValor, operacao, atual, anterior);
        break;

      case "DEL":
        this.operacaoDel();
        break;

      case "CE":
        this.operacaoCe();
        break;

      case "C":
        this.operacaoC();
        break;

      case "=":
        this.operacaoIgual();
        break;

      default:
        return;
    }
  }

  //Altera os valores da tela
  telaAtualiza(
    operacaoValor = null,
    operacao = null,
    atual = null,
    anterior = null
  ) {
    if (operacaoValor === null) {
      this.operacaoAtualText.innerText += this.operacaoAtual;
    } else {
      if (anterior === 0) {
        operacaoValor = atual;
      }
      this.operacaoAnteriorText.innerText = `${operacaoValor} ${operacao}`;
      this.operacaoAtualText.innerText = "";
    }
  }
  mudaOperacao(operacao) {
    const operacaoMath = ["*", "/", "+", "-"];

    if (!operacaoMath.includes(operacao)) {
      return;
    }
    this.operacaoAnteriorText.innerText =
      this.operacaoAnteriorText.innerText.slice(0, -1) + operacao;
  }

  //Deletar o ultimo digito
  operacaoDel() {
    this.operacaoAtualText.innerText = this.operacaoAtualText.innerText.slice(
      0,
      -1
    );
  }

  operacaoCe() {
    this.operacaoAtualText.innerText = "";
  }

  operacaoC() {
    //(this.operacaoAtualText.innertText = ""),
    this.operacaoAtualText.innerText = "";
    this.operacaoAnteriorText.innerText = "";
  }

  operacaoIgual() {
    //const operacao = operacaoAnteriorText.innerText.split(" ")(1);
    const operacao = operacaoAnteriorText.innerText.split(" ")[1];
    this.processandoOperacao(operacao);
  }
}

const calc = new calculador(operacaoAnteriorText, operacaoAtualText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (evento) => {
    const valor = evento.target.innerText;

    if (+valor >= 0 || valor === ".") {
      calc.adicionaDigito(valor);
    } else {
      calc.processandoOperacao(valor);
    }
  });
});
