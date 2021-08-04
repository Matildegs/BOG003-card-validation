import validator from './validator.js';

 let numeroTarjeta = document.getElementById("creditcardNumber").value 
 //console.log(validator.isValid(numeroTarjeta));

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

// boton Validación 
  document.getElementById("Validar").addEventListener("click", function (creditCardNumber) {
  let numeroTarjeta = document.getElementById("creditcardNumber").value;
  console.log(validator.isValid(numeroTarjeta));
       if (validator.isValid (numeroTarjeta)) {
         alert("Valida");
         return;
      }   
      else {
        alert("No Valida");
        return;
       }
  
})
//*¿Como guardar en una variable el resultado de la funcion isValid? linea 13 variable decidir si se muestra o ocultar.

  
  

