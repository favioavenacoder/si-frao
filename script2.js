function crearArrayDesdeCadenaNumerica(cadenaNum) {
  let resultado = [];
  let numeros = cadenaNum.split(/[,\s]+/);

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== "") {
      resultado.push(Number(numeros[i]));
    }
  }


  return resultado;
}
function crearArrayDesdeCadenaNumerica2(cadenaNum2) {
  let resultado = [];
  let numeros = cadenaNum2.split(/[,\s]+/);

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== "") {
      resultado.push(Number(numeros[i]));
    }
  }


  return resultado;
}

function mesclarArrays(){

  let numeros = segundoCadenaNumerica.split(/[,\s]+/);

  let mesmescla1 = array1;
  let mesmescla2 = array2;

mesmescla1[0+numeros[15]%4] = mesmescla2[4+numeros[15]%4];
mesmescla1[4+numeros[15]%4] = mesmescla2[0+numeros[15]%4];

mesmescla1[1+numeros[15]%4] = mesmescla2[3+numeros[15]%4];
mesmescla1[3+numeros[15]%4] = mesmescla2[1+numeros[15]%4];

mesmescla1[5+numeros[15]%4] = mesmescla2[11+numeros[15]%4];
mesmescla1[11+numeros[15]%4] = mesmescla2[5+numeros[15]%4];

mesmescla1[8+numeros[15]%4] = mesmescla2[18+numeros[15]%4];
mesmescla1[18+numeros[15]%4] = mesmescla2[8+numeros[15]%4];

mesmescla1[10+numeros[15]%4] = mesmescla2[19+numeros[15]%4];
mesmescla1[19+numeros[15]%4] = mesmescla2[10+numeros[15]%4];

mesmescla1[12+numeros[15]%4] = mesmescla2[14+numeros[15]%4];
mesmescla1[14+numeros[15]%4] = mesmescla2[12+numeros[15]%4];

mesmescla1[20+numeros[15]%4] = mesmescla2[24+numeros[15]%4];
mesmescla1[24+numeros[15]%4] = mesmescla2[20+numeros[15]%4];

mesmescla1[21+numeros[15]%4] = mesmescla2[22+numeros[15]%4];
mesmescla1[22+numeros[15]%4] = mesmescla2[21+numeros[15]%4];

mesmescla1[33+numeros[15]%4] = mesmescla2[35+numeros[15]%4];
mesmescla1[35+numeros[15]%4] = mesmescla2[33+numeros[15]%4];

mesmescla1[30+numeros[15]%4] = mesmescla2[34+numeros[15]%4];
mesmescla1[34+numeros[15]%4] = mesmescla2[30+numeros[15]%4];

array1= mesmescla1;
array2= mesmescla2;
}

let cadenaNum = sextaCadenaNumerica;
let cadenaNum2 = segundoCadenaNumerica;
let array1 = crearArrayDesdeCadenaNumerica(cadenaNum);
let array2 = [...array1];
let array0 = crearArrayDesdeCadenaNumerica2(cadenaNum2);
mesclarArrays();


let cadenaNu1 = array1.join(', ');
let cadenaNu2 = array2.join(', ');

//console.log("segundo texto", cadenaNum2);
//console.log("sextaCadenaNumerica",sextaCadenaNumerica);
console.log("resultado:",cadenaNu1);
//console.log(cadenaNu2);