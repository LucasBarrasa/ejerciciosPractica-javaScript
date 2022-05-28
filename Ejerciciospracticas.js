
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// /*const contadorCaracteres = (cadena = "") => 
//     (!cadena)
//     ? console.warn("No a ingresado ninguna cadena de texto")
//     : console.info(`La cadena ingresada cuenta con una cantidad de ${cadena.length} caracteres.`);

// contadorCaracteres("Hola mundo")
// */


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// /*const recorte = (cadena = "",longitud = undefined) =>
//     (!cadena) 
//     ? console.warn("No ah ingresado ninguna cadena de texto")
//     :(longitud === undefined)
//     ? console.warn("Porfavor ingrese una cantidad de caracteres a recortar valida")
//     : console.info(cadena.slice(0,longitud));


// recorte("Hola mundo", 4)
// recorte("Hola mundo", )
// recorte()*/

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// const separador = (cadena = "" , valor = "") => {
//     (!cadena)
//     ? console.warn("No ah ingresado ninguna cadena de texto")
//     : (!valor)
//     ? console.warn("No ah ingresado ningun separador")
//     : console.info(cadena.split(valor))
// }

// separador("Hola, que tal", " ")
// separador("", " ")
// separador("Hola, que tal")


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// const repetidor = (cadena = "", valor = undefined) => {

//     Manera 1

//     (!cadena)
//     ? console.warn("No ah ingresado ninguna cadena de texto")
//     : (!valor)
//     ? console.warn("No ah ingresado la cantidad de veces a repetir")
//     : console.info(cadena.repeat(valor))


//     // 2 manera en la que agrego un espacio

//     if (!cadena) return console.warn("No ah ingresado ninguna cadena de texto");
//     if (!valor) return console.warn("No ah ingresado la cantidad de veces a repetir");

//     let array1 = "";
//     for (i = 0; i < valor; i++){
//         array1 += cadena + " ";
//     }
//     console.info(array1)
// }

// repetidor("", 3)
// repetidor("Hola")
// repetidor("Hola mundo",3)

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirtexto = (cadena = "") => {
    (!cadena)
    ? console.warn("No ah ingresado ninguna cadena de texto")
    : console.info(cadena.split("").reverse().join(""))
} 

invertirtexto("Hola mundo")


//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.