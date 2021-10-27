console.log("Parámetros opcionales.");
console.log("----------------------");

(() => {

    const fullName = (firstName: string, lastName?: string):string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Jhonatan');

    console.log({name});

})();
