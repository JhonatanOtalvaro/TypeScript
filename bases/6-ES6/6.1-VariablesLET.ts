console.log("Variables LET");
console.log("-------------");

(() => {

    //en TypeScript no se debería trabajar con 'var'

    const Nombre: string = 'Jhonatan';

    const  getName = (): void =>{
        console.log("Viejo getName");
    }
    


})()