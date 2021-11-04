"use strict";
console.log("Como crear objetos con tipos específicos.");
console.log("-----------------------------------------");
(function () {
    var flash = {
        nombre: "Barry Allen",
        edad: 24,
        poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
    };
    flash = {
        nombre: 'Clark Kent',
        edad: 60,
        poderes: ['Puede volar', 'Super velocidad'],
        getNombre: function () {
            return this.nombre;
        }
    };
    console.log(flash);
})();
