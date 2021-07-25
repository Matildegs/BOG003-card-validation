import validator from './validator.js';

console.log(validator);

// Pruebas.
const targetDiv = document.getElementById("Pagina2");
const btn = document.getElementById("Continuar");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};