const operacaoAnteriorText = document.querySelector("#operacao-anterior");
const operacaoAtualText = document.querySelector("#operacao-atual");
const buttons = document.querySelectorAll("#buttons-container button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (evento) => {
    const valor = evento.target.innerText;
    console.log(valor);
  });
});
