const { verificarIdade } = require("./idade");

test("retorna true para idade adulta (25)", () => {
  expect(verificarIdade(25)).toBe(true);
});

test("retorna false para menor de idade (15)", () => {
  expect(verificarIdade(15)).toBe(false);
});

test("retorna true para a idade limite (18)", () => {
  expect(verificarIdade(18)).toBe(true);
});