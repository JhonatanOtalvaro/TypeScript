"use strict";
//[] = arreglo o tupla o trío o cuarteto...
//numbers.push(11);
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ['Omega Rojo', 'Dormmamu', 'Duende Verde'];
    //For each es un método propio de los arreglos.
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
