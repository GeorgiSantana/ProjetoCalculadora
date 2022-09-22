const operacaoAnteriorText = document.querySelector("#operacao-anterior");
const operacaoAtualText = document.querySelector("#operacao-atual");
const buttons = document.querySelectorAll("#buttons-container button");

class calculador {
  constructor() {}
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (evento) => {
    const valor = evento.target.innerText;

    if (parseInt(valor) >= 0 || parseInt(valor) === ".") {
      console.log(valor);
    } else {
      console.log("Operacão " + valor);
    }
  });
});
