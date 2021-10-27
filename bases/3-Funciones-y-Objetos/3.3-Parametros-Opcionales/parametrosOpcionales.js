"use strict";
console.log("Parámetros opcionales.");
console.log("----------------------");
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('Jhonatan');
    console.log({ name: name });
})();
