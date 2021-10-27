console.log("Parámetros obligatorios");
console.log("-----------------------");

(() => {

    const fullName = ( FirstName:string , LastName:string ): string => {
        
        if ( !FirstName){

            throw new Error("FirstName is required");

        }

        return `${FirstName} ${LastName}`;
    }

    const name = fullName("Jhonatan", "Otalvaro");
    console.log({name});

})();