var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // assim busca todas as classes com esse elemento

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var pesoEhValido = validaPeso(peso);


  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var alturaEhValido = validaAltura(altura);

  var tdImc = paciente.querySelector(".info-imc");

  if (!pesoEhValido) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido"); //crio uma classe no css e adiciono essa classe no javascript.
  }

  function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
      return true;
    } else {
      return false;
    }
  }

  function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
      return true;
    } else {
      return false;
    }
  }

  if (!alturaEhValido) {
    console.log("Altura inválida!");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos";
  }



  function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
    //o toFixed(2)limita o número de casas decimais
  }


};
