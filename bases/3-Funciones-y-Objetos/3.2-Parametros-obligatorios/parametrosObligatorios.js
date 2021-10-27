"use strict";
console.log("Parámetros obligatorios");
console.log("-----------------------");
(function () {
    var fullName = function (FirstName, LastName) {
        if (!FirstName) {
            throw new Error("FirstName is required");
        }
        return FirstName + " " + LastName;
    };
    var name = fullName("Jhonatan", "Otalvaro");
    console.log({ name: name });
})();
