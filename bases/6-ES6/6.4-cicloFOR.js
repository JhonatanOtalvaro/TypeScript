"use strict";
console.log("Ciclo FOR");
console.log("----------");
(function () {
    var CapAmerica = {
        name: "CapAmerica",
        weapon: "shield"
    };
    var thor = {
        name: "thor",
        weapon: "Mjolnir"
    };
    var avenger = [CapAmerica, thor];
    for (var index = 0; index < avenger.length; index++) {
        var element = avenger[index];
        console.log(element.name);
    }
})();
