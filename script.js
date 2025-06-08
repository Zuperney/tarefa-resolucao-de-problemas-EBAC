// 1 - pegar valores de entrada
//    |input com os valores em reias
//    |input de select com opçoes de tipos de gastos
// 2 - pegra a categoria do select
// 3 - inpedir valores negativos
// 4 - de acordo com a categoria , atualizar valores de gastos
//    |4.1 valores de cada categoria
// 5 - atualizar interface
// 6 - limpar campos de entrada

const listaGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Lazer", 0],
  ["Outros", 0],
];

document
  .getElementById("adicionarGasto", "atividade")
  .addEventListener("click", function () {
    const valorInput = document.getElementById("valorReais").value;
    const opcaoSelect = document.getElementById("atividade").value;

    if (opcaoSelect === "alimentacao") {
      listaGastos[0][1] += parseFloat(valorInput);
      console.log("A categoria é Alimentação", listaGastos[0]);
    } else if (opcaoSelect === "transporte") {
      listaGastos[1][1] += parseFloat(valorInput);
      console.log("A categoria é Transporte", listaGastos[1]);
    } else if (opcaoSelect === "lazer") {
      listaGastos[2][1] += parseFloat(valorInput);
      console.log("A categoria é Lazer", listaGastos[2]);
    } else if (opcaoSelect === "outros") {
      listaGastos[3][1] += parseFloat(valorInput);
      console.log("A categoria é Outros", listaGastos[3]);
    }
    const textoA = document.getElementById("a");
    textoA.innerText = `Alimentação: R$ ${listaGastos[0][1].toFixed(2)}`;
    const textoB = document.getElementById("b");
    textoB.innerText = `Transporte: R$ ${listaGastos[1][1].toFixed(2)}`;
    const textoC = document.getElementById("c");
    textoC.innerText = `Lazer: R$ ${listaGastos[2][1].toFixed(2)}`;
    const textoD = document.getElementById("d");
    textoD.innerText = `Outros: R$ ${listaGastos[3][1].toFixed(2)}`;
    const totalGastos =
      listaGastos[0][1] +
      listaGastos[1][1] +
      listaGastos[2][1] +
      listaGastos[3][1];
    const totalTexto = document.getElementById("e");
    totalTexto.innerText = `Total: R$ ${totalGastos.toFixed(2)}`;
  });
