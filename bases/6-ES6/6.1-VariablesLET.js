"use strict";
console.log("Variables LET");
console.log("-------------");
(function () {
    //en TypeScript no se debería trabajar con 'var'
    var Nombre = 'Jhonatan';
    var getName = function () {
        console.log("Viejo getName");
    };
})();
