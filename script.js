// 1 - pegar valores de entrada
//    |input com os valores em reias
//    |input de select com opçoes de tipos de gastos
// 2 - pegra a categoria do select
// 3 - inpedir valores negativos
// 4 - de acordo com a categoria , atualizar valores de gastos
//    |4.1 valores de cada categoria
// 5 - atualizar interface
// 6 - limpar campos de entrada
document.getElementById("adicionar").addEventListener("click", function () {
  const valorInput = document.getElementById("valorReais");
  console.log(valorInput.value);
});

const listaGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Saúde", 0],
  ["Educação", 0],
  ["Lazer", 0],
  ["Outros", 0],
];

document.getElementById("atividade").addEventListener("change", function () {
  console.log(this.value);
});
