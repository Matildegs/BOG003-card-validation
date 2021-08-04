const validator = {

  //*Tarjeta de Crédito Válida: 

  //* 1. Preguntar por el número de la tarjeta
  //* 2. Pasar los números a un array en orden
  //*Dar la vuelta a una cadena usando split()
  //* var = "123456"
  //* tarjeta.split('').reverse()
  //* (6) ["6", "5", "4", "3", "2", "1"]
  //*Inicio de función:
  isValid: function(creditcardNumber) {
    let numberVa = creditcardNumber.split("");
    let numberLunh = numberVa.reverse();
    let arraySuma = 0;
    let sumaImpar = 0;
    let sumaTotal = 0;
    let sumaPar = 0;
    //* 3. Aplicar operaciones a los números de las posiciones pares. A todos  
    //* que ocupan las posiciones pares se les debe multiplicar por dos y si el doble de 
    //* ese número es mayor o igual a 10 debemos de sumar los digitos del resultado.
    //* Los números que ocupan las posiciones pares se les debe multiplicar por dos:
    for (
      let i = 0; i < numberLunh.length; i++) {
      //* Posición:
      if (i % 2 === 1){
        //* Multiplicar:
        sumaPar = numberLunh[i] * 2;
      
       
      //* El número es mayor o igual a 10 debemos de sumar los digitos del resultado:
      if (sumaPar >= 10) {
        //* String y se separa:
        arraySuma = sumaPar.toString().split("")
        //* Se suman entres si para dar un solo número: 
        numberLunh[i] = parseInt(arraySuma[0]) + parseInt(arraySuma[1])
      }
      //* Actualiza el valor de los números par, que no se deben multiplicar y 
      //* almacenar los numeros impares: 
      else { 
        numberLunh[i] = sumaPar; } }
      sumaTotal = parseInt(sumaTotal) + parseInt(numberLunh[i]);
      if (i % 2 === 0) {
        sumaImpar = parseInt(sumaImpar) + parseInt(numberLunh[i])
      }
    }
    //* 4. Sumar los digitos y nuevos digitos. Ahora deberás sumar los números de las posiciones 
    //* impares y el nuevo número que se obtendrá de las posiciones pares.
    sumaTotal = sumaTotal + sumaImpar;
    if (sumaTotal % 10 == 0) {
      console.log("Valido")
      return true
    }
    else { 
      console.log("Invalido")
      return false; }
  },
  //* 5. Comprobar si es una tarjeta válida. Cuando ya tengas el resultado deberás obtener el résiduo de la 
  //* división entre 10  y si es igual a 0 significa que es una tarjeta de crédito válida.
  //*Maskify
  
  
};
export default validator;


