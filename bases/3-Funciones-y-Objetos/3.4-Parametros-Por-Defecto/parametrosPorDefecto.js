"use strict";
//Convertir a mayúsculas a partir de un valor booleano
console.log("Parámetros Por Defecto");
console.log("----------------------");
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || '"Opcional"')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '"Opcional"');
        }
    };
    var name = fullName('Jhonatan', "Otalvaro", true);
    console.log({ name: name });
})();
