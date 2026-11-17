function verificarIdade(idade) {
  return idade >= 18;
}

// Permite usar o mesmo arquivo no Jest (Node) e no navegador
if (typeof module !== "undefined") {
  module.exports = { verificarIdade };
}