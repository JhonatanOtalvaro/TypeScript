"use strict";
console.log("Desestructuración de arreglos");
console.log("-----------------------------");
(function () {
    var avengerArr = ['Cap. América', 'Ironman', 'Hulk'];
    // Desestructuración de arreglos
    /*const ironman = avengerArr[1];
    console.log({ironman});*/
    var capitan = avengerArr[0], ironman = avengerArr[1];
    console.log({ ironman: ironman, capitan: capitan });
})();
