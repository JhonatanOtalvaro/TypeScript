console.log("Funciones Básicas");
console.log("-----------------");

(() => {

    const hero: string = 'Flash';

    function returnName(): string {


        return hero;
    }

    const activateBatisignal = () => {
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatisignal);

    const heroName = returnName();

})()