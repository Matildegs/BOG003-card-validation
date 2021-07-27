import validator from './validator.js';

console.log(validator);

// Pruebas.
document.getElementById("Continuar").addEventListener("click", function () {
  const targetDiv = document.getElementById("Pagina2");
  targetDiv.style.display = "block";
  console.log(targetDiv.style.display)
  /*if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
   } 
  else {
    targetDiv.style.display = "block";
   }*/
   console.log(targetDiv.style.display)
   const targetDivPagina1 = document.getElementById("Pagina1");
   targetDivPagina1.style.display = "none";
   console.log(targetDivPagina1.style.display)
   /*if (targetDivPagina1.style.display !== "none") {
     targetDivPagina1.style.display = "none";
    } 
   else {
    targetDivPagina1.style.display = "block";
    }*/
  })

// Función Mostrar Pagina 2.

/*const btn = document.getElementById("Continuar");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
   } 
  else {
    targetDiv.style.display = "block";
   }
 };*/