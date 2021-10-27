console.log("Tipo Función");
console.log("------------");

(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string ) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;

    let myFuntion: Function;

    //* myFuntion = 10;
    //* console.log(myFuntion);

    myFuntion = addNumbers;
    console.log(myFuntion(1, 2));

    myFuntion = greet;
    console.log(myFuntion('Jhonatan'));

    myFuntion = saveTheWorld;
    console.log(myFuntion());

})();