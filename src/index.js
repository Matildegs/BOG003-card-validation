import validator from './validator.js';

console.log(validator);

//Alerta Bienvenido

 window.confirm('Bienvenido');

// Mostrar Página 2

 document.getElementById("Continuar").addEventListener("click", function () {
  const targetDiv = document.getElementById("Pagina2");
  targetDiv.style.display = "block";

// Ocultar Página 1

  const targetDivPagina1 = document.getElementById("Pagina1");
  targetDivPagina1.style.display = "none";
  })

// Pruebas Validación 

