//Convertir a mayúsculas a partir de un valor booleano


console.log("Parámetros Por Defecto");
console.log("----------------------");

(() => {

    const fullName = (firstName: string, lastName?: string, upper: boolean = false):string => {

        if(upper){
            return  `${firstName} ${lastName || '"Opcional"'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || '"Opcional"'}`;
        }

        

    }

    const name = fullName('Jhonatan', "Otalvaro", true);
    console.log({name});

})()