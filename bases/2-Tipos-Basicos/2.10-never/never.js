"use strict";
console.log("========= Never ==========");
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Error');
    console.log("Hola mundo");
})();
