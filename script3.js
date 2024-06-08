
// Solicitar primer texto mediante prompt
let primerTexto = "mi primera chamba";//prompt("Ingresa la cadena numerica:");

// Convertir primer texto a cadena numerica comun y corriente
let primerCadenaNumerica = convertirTextoACadenaNumerica(primerTexto);

// Solicitar segundo texto mediante prompt
//let segundoTexto = "mi segunda chamba"//prompt("Ingresa el segundo texto:")";

// Convertir segundo texto a cadena numerica comun y corriente
//let segundoCadenaNumerica = convertirTextoACadenaNumerica(segundoTexto);

// Obtener la representacion en tetrario del segundo numero
let tetrarioSegundoNumero = decimalATetrario(textoAAsciiYDecimal(segundoTexto));

// Proceso adicional para obtener una tercera cadena numerica
let terceraCadenaNumerica = aplicarProcesoTetrario(primerCadenaNumerica, tetrarioSegundoNumero);

// Sumar la segunda cadena a la tercera cadena numerica despues del proceso tetrario para obtener la cuarta cadena
let cuartaCadenaNumericaSuma = sumarCadenasNumericas(segundoCadenaNumerica, terceraCadenaNumerica);

// Obtener el quinto elemento de la segunda cadena y sumarle el resto de dividirlo por 11 a cada elemento de la cuarta cadena
let quintaCadenaNumerica = sumarRestoQuintoElemento(segundoCadenaNumerica, cuartaCadenaNumericaSuma, 5, 11);

// Obtener el sexto elemento de la segunda cadena y sumarle el resto de dividirlo por 11 a cada elemento de la cuarta cadena
//let sextaCadenaNumerica = sumarRestosextoElemento(segundoCadenaNumerica, quintaCadenaNumerica, 6, 23);
sextaCadenaNumerica= cadenaNu1;
//let septimaCadenaNumerica = desordenar


//a partir de aca se empieza a revertir

// Obtener el revertirprimero elemento de la segunda cadena y sumarle el resto de dividirlo por 11 a cada elemento de la cuarta cadena
let revertirprimeraCadenaNumerica = sumarRestorevertirprimeroElemento(segundoCadenaNumerica, sextaCadenaNumerica, 6, 23);

// Obtener el revertirsegundo elemento de la segunda cadena y sumarle el resto de dividirlo por 11 a cada elemento de la cuarta cadena
let revertirsegundaCadenaNumerica = sumarRestorevertirsegundoElemento(segundoCadenaNumerica, revertirprimeraCadenaNumerica, 5, 11);

// Restar la segunda cadena a la cuarta cadena para obtener la quinta cadena
let revertirterceroCadenaNumericaResta = restarCadenasNumericas(revertirsegundaCadenaNumerica, segundoCadenaNumerica);

// Proceso inverso al tetrario para obtener la revertirquarta cadena numerica
let revertirquartaCadenaNumerica = aplicarProcesoInversoTetrario(revertirterceroCadenaNumericaResta, tetrarioSegundoNumero);

let descifrarFinal= cadenaNumericaATexto(revertirquartaCadenaNumerica);
/* silenciando , censurando

console.log(`Primer texto: ${primerTexto}`);
console.log(`Cadena numerica correspondiente al primer texto: ${primerCadenaNumerica}`);

console.log(`\nSegundo texto: ${segundoTexto}`);
console.log(`Cadena numerica correspondiente al segundo texto: ${segundoCadenaNumerica}`);
console.log(`Representacion en tetrario del segundo numero: ${tetrarioSegundoNumero}`);

console.log(`\nTercera cadena numerica despues del proceso tetrario: ${terceraCadenaNumerica}`);

console.log(`Cuarta cadena numerica suma de la segunda y tercera cadenas: ${cuartaCadenaNumericaSuma}`);

console.log(`Quinta cadena numerica suma del quinto elemento de la segunda cadena al resto de dividirlo por 11 *(i+4)%((i+8)%5) a cada elemento de la cuarta cadena: ${quintaCadenaNumerica}`);

console.log(`sexta cadena numerica suma del quinto elemento de la segunda cadena al resto de dividirlo por 23 y multiplicarlo por 17 y multiplicarlo por el nunenoElemento % 6 a cada elemento de la quinta cadena: ${sextaCadenaNumerica}`);

// a partir de aca se empieza a revertir

console.log(`revertirprimera cadena numerica resta del sexto elemento de la segunda cadena al resto de dividirlo por 23 y multiplicarlo por 17 y multiplicarlo por el nunenoElemento % 6 a cada elemento de la quinta cadena: ${revertirprimeraCadenaNumerica}`);

console.log(`revertirsegunda cadena numerica resta del quinto elemento de la segunda cadena al resto de dividirlo por 11 *(i+4)%((i+8)%5) a cada elemento de la cuarta cadena: ${revertirsegundaCadenaNumerica}`);

console.log(`revertirtercero cadena numerica resta de la segunda a la cuarta cadena: ${revertirterceroCadenaNumericaResta}`);

*/

//console.log(`revertirquarta cadena numerica despues del proceso inverso al tetrario: ${revertirquartaCadenaNumerica}`);
console.log(descifrarFinal);



// Comprobar si la revertirquarta cadena es igual a la primera
//let sonIguales = (primerCadenaNumerica === revertirquartaCadenaNumerica);
//console.log(`\n¿La revertirquarta cadena numerica es igual a la primera? ${sonIguales ? 'Si' : 'No'}`);

function convertirTextoACadenaNumerica(texto) {
  let cadenaNumerica = '';

  for (let i = 0; i < texto.length; i++) {
    let char = texto.charAt(i);
    let valor = char.charCodeAt(0);

    // Agrega el valor a la cadena numerica
    cadenaNumerica += valor;

    // Agrega una coma y un espacio si no es el ultimo caracter
    if (i < texto.length - 1) {
      cadenaNumerica += ', ';
    }
  }

  return cadenaNumerica;
}

function textoAAsciiYDecimal(texto) {
  let sumaAscii = 0;

  for (let i = 0; i < texto.length; i++) {
    let char = texto.charAt(i);
    let valorAscii = char.charCodeAt(0);
    sumaAscii += valorAscii;
  }

  return sumaAscii;
}

function decimalATetrario(numeroDecimal) {
  if (isNaN(numeroDecimal) || numeroDecimal < 0) {
    return "Por favor, ingresa un numero entero no negativo.";
  }

  let tetrario = '';

  while (numeroDecimal > 0) {
    let residuo = numeroDecimal % 4;
    tetrario = residuo + tetrario;
    numeroDecimal = Math.floor(numeroDecimal / 4);
  }

  return tetrario || '0';  // Devuelve '0' si el numero original es 0
}

function aplicarProcesoTetrario(cadenaNumerica, tetrario) {
  let numeros = cadenaNumerica.split(', ').map(numero => parseInt(numero, 10));
  let terceraCadenaNumerica = '';

  for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i];

    // Aplicar el proceso tetrario a cada digito del numero
    let tetrarioArray = tetrario.split('').map(digito => parseInt(digito, 10));

    for (let j = 0; j < tetrarioArray.length; j++) {
      switch (tetrarioArray[j]) {
        case 0:
          resultado += 49;
          break;
        case 1:
          resultado *= 7;
          break;
        case 2:
          resultado += 169;
          break;
        case 3:
          resultado *= 13;
          break;
      }
    }

    // Agregar el resultado a la tercera cadena numerica
    terceraCadenaNumerica += resultado;

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < numeros.length - 1) {
      terceraCadenaNumerica += ', ';
    }
  }

  return terceraCadenaNumerica;
}

// Funcion para aplicar el proceso inverso al tetrario
function aplicarProcesoInversoTetrario(cadenaNumerica, tetrario) {
  let numeros = cadenaNumerica.split(', ').map(numero => parseInt(numero, 10));
  let revertirquartaCadenaNumerica = '';

  for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i];

    // Aplicar el proceso inverso al tetrario a cada digito del numero
    let tetrarioArray = tetrario.split('').map(digito => parseInt(digito, 10));

    for (let j = tetrarioArray.length - 1; j >= 0; j--) {
      switch (tetrarioArray[j]) {
        case 0:
          resultado -= 49;
          break;
        case 1:
          resultado /= 7;
          break;
        case 2:
          resultado -= 169;
          break;
        case 3:
          resultado /= 13;
          break;
      }
    }

    // Agregar el resultado a la revertirquarta cadena numerica
    revertirquartaCadenaNumerica += Math.round(resultado);

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < numeros.length - 1) {
      revertirquartaCadenaNumerica += ', ';
    }
  }

  return revertirquartaCadenaNumerica;
}

// Funcion para sumar elemento por elemento dos cadenas numericas
function sumarCadenasNumericas(cadena1, cadena2) {
  let numeros1 = cadena1.split(', ').map(numero => parseInt(numero, 10));
  let numeros2 = cadena2.split(', ').map(numero => parseInt(numero, 10));

  let cuartaCadenaNumericaSuma = '';

  // Obtener la longitud de la cadena más corta
  let longitudMinima = Math.min(numeros1.length, numeros2.length);

  for (let i = 0; i < longitudMinima; i++) {
    let sumaElementos = numeros1[i] + numeros2[i];
    cuartaCadenaNumericaSuma += sumaElementos;

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < longitudMinima - 1) {
      cuartaCadenaNumericaSuma += ', ';
    }
  }

  return cuartaCadenaNumericaSuma;
}

// Funcion para restar elemento por elemento dos cadenas numericas
function restarCadenasNumericas(cadena1, cadena2) {
  let numeros1 = cadena1.split(', ').map(numero => parseInt(numero, 10));
  let numeros2 = cadena2.split(', ').map(numero => parseInt(numero, 10));

  let revertirterceroCadenaNumericaResta = '';

  // Obtener la longitud de la cadena más corta
  let longitudMinima = Math.min(numeros1.length, numeros2.length);

  for (let i = 0; i < longitudMinima; i++) {
    let restaElementos = numeros1[i] - numeros2[i];
    revertirterceroCadenaNumericaResta += restaElementos;

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < longitudMinima - 1) {
      revertirterceroCadenaNumericaResta += ', ';
    }
  }

  return revertirterceroCadenaNumericaResta;
}

// Funcion para sumar modulo a cada elemento de la cadena
function sumarRestoQuintoElemento(cadena, cadenaSuma, indiceElemento, modulo) {
  let numeros = cadena.split(', ').map(numero => parseInt(numero, 10));
  let quintoElemento = numeros[indiceElemento];
  let nunetElemento = numeros[indiceElemento+4];
  let nunet2Elemento = numeros[indiceElemento+8];

  let numerosSuma = cadenaSuma.split(', ').map(numero => parseInt(numero, 10));

  let quintaCadenaNumerica = '';

  for (let i = 0; i < numerosSuma.length; i++) {
    let resultado = numerosSuma[i] + (quintoElemento % modulo)*(nunetElemento% (nunet2Elemento%5));
    quintaCadenaNumerica += resultado;

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < numerosSuma.length - 1) {
      quintaCadenaNumerica += ', ';
    }
  }

  return quintaCadenaNumerica;
}

// Funcion para sumar modulo a cada elemento de la cadena
function sumarRestosextoElemento(cadena, cadenaSuma, indiceElemento, modulo) {
  let numeros = cadena.split(', ').map(numero => parseInt(numero, 10));
  let sextoElemento = numeros[indiceElemento];
  let nunenoElemento = numeros[indiceElemento+3];

  let numerosSuma = cadenaSuma.split(', ').map(numero => parseInt(numero, 10));

  let sextaCadenaNumerica = '';

  for (let i = 0; i < numerosSuma.length; i++) {
    let resultado = numerosSuma[i] + (sextoElemento % modulo)*17*(nunenoElemento % 6);
    sextaCadenaNumerica += resultado;

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < numerosSuma.length - 1) {
      sextaCadenaNumerica += ', ';
    }
  }

  return sextaCadenaNumerica;
}

// Funcion para sumar modulo a cada elemento de la cadena
function sumarRestorevertirprimeroElemento(cadena, cadenaResta, indiceElemento, modulo) {
  let numeros = cadena.split(', ').map(numero => parseInt(numero, 10));
  let revertirprimeroElemento = numeros[indiceElemento];
  let nunenoElemento = numeros[indiceElemento+3];

  let numerosResta = cadenaResta.split(', ').map(numero => parseInt(numero, 10));

  let revertirprimeraCadenaNumerica = '';

  for (let i = 0; i < numerosResta.length; i++) {
    let resultado = numerosResta[i] - (revertirprimeroElemento % modulo)*17*(nunenoElemento % 6);
    revertirprimeraCadenaNumerica += resultado;

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < numerosResta.length - 1) {
      revertirprimeraCadenaNumerica += ', ';
    }
  }

  return revertirprimeraCadenaNumerica;
}

// Funcion para sumar modulo a cada elemento de la cadena
function sumarRestorevertirsegundoElemento(cadena, cadenaSuma, indiceElemento, modulo) {
  let numeros = cadena.split(', ').map(numero => parseInt(numero, 10));
  let quintoElemento = numeros[indiceElemento];
  let nunetElemento = numeros[indiceElemento+4];
  let nunet2Elemento = numeros[indiceElemento+8];

  let numerosSuma = cadenaSuma.split(', ').map(numero => parseInt(numero, 10));

  let revertirsegundaCadenaNumerica = '';

  for (let i = 0; i < numerosSuma.length; i++) {
    let resultado = numerosSuma[i] -  (quintoElemento % modulo)*(nunetElemento% (nunet2Elemento%5));
    revertirsegundaCadenaNumerica += resultado;

    // Agregar una coma y un espacio si no es el ultimo numero
    if (i < numerosSuma.length - 1) {
      revertirsegundaCadenaNumerica += ', ';
    }
  }

  return revertirsegundaCadenaNumerica;
}

// Función para convertir cadena numérica en texto
function cadenaNumericaATexto(revertirquartaCadenaNumerica) {
  // Divide la cadena numérica en números separados por comas
  let numeros = revertirquartaCadenaNumerica.split(',');
  let texto = '';

  // Recorre cada número y lo convierte en su carácter correspondiente
  for (let i = 0; i < numeros.length; i++) {
    let valor = parseInt(numeros[i]) ; // Dividido por 2 para invertir la operación
    let caracter = String.fromCharCode(valor);
    texto += caracter;
  }
//console.log("texto"+texto);
  return texto;
}
