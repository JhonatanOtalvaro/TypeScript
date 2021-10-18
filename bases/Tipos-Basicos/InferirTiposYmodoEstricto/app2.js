"use strict";
/*Función anónima autoinvocada para que las variables no choquen con
otras variables de otros archivos*/
(function () {
    var a = 10;
    console.log(a);
})();
/* Inferir tipos y modo estricto */
//Cualquier tipado
//--------------------------------
//const a = 10;
//Tipo number con 'let'
//--------------------------------
//let b = 10;
//--------------------------------
/* Infiriendo los tipos */
//a: es un número
var a = 10;
//b: es un número
var b = 10;
