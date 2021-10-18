//definir una constante sin el tipado estricto
const msg = 'Hola mundo';
console.log("definir una constante sin el tipado estricto:", msg);
//definir constante con el tipado estricto
const mensaje: string = 'Hola mundo!!!';
console.log("definir constante con el tipado estricto:", mensaje);
//probando modo observador: tsc -w
const prueba: string = "soy watch.";
console.log("Esto es una prueba del modo observador: tsc -w",prueba);
/*

=========== Otra prueba ==============

*/

const hero = {

    name: 'Ironman',
    age: 45

}

hero.age = 50;

console.log("Segunda prueba del modo observador: tsc -w", hero);
console.log("Nombre:", hero.name);
console.log("Edad:", hero.age + 1);


//en la consola...
/*
==================================
tsc = TypeScript compiler
tsc app.ts = compilar el archivo
tsc --init = traducir de TypeScrip a JavaScript 
tsc = generar un archivo eliminado
tsc --watch = modo observador
tsc -w = modo observador

*/