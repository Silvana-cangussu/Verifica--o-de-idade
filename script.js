const campo = document.getElementById("idade");
const botao = document.getElementById("verificar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.className = "";

  if (campo.value === "") {
    mensagem.textContent = "Digite uma idade.";
    return;
  }

  const idade = Number(campo.value);

  if (verificarIdade(idade)) {
    mensagem.textContent = "Maior de idade";
    mensagem.classList.add("maior");
  } else {
    mensagem.textContent = "Menor de idade";
    mensagem.classList.add("menor");
  }
});