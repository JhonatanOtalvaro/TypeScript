"use strict";
console.log("Tipo Función");
console.log("------------");
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    var myFuntion;
    //* myFuntion = 10;
    //* console.log(myFuntion);
    myFuntion = addNumbers;
    console.log(myFuntion(1, 2));
    myFuntion = greet;
    console.log(myFuntion('Jhonatan'));
    myFuntion = saveTheWorld;
    console.log(myFuntion());
})();
