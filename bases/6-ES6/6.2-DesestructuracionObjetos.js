"use strict";
console.log("Desestructuración de objetos");
console.log("----------------------------");
(function () {
    var avengers = {
        nick: "Nick Fury",
        ironman: "Tony Stark",
        vision: "Vision",
        activo: true,
        poder: 1500
    };
    var poder = avengers.poder, vision = avengers.vision;
    console.log("el poder de vision es de:" + poder.toFixed());
    //------------------------------------------------------------------
    var printAvenger = function (avengers) {
        console.log(avengers.nick);
    };
    printAvenger(avengers);
})();
