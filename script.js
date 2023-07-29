const number0 = document.getElementById("number0");
const number1 = document.getElementById("number1");

const result = document.getElementById("resultado");

function calcular(operacao) {
  if (operacao === "somar") {
    somar();
  } else if (operacao === "subtrair") {
    subtraIr();
  } else if (operacao === "dividir") {
    dividir();
  } else {
    multiplicar();
  }
}

function somar() {
  result.textContent = Number(number0.value) + Number(number1.value);
}

function subtraIr() {
  result.textContent = Number(number0.value) - Number(number1.value);
}

function dividir() {
  result.textContent = Number(number0.value) / Number(number1.value);
}

function multiplicar() {
  result.textContent = Number(number0.value) * Number(number1.value);
}
