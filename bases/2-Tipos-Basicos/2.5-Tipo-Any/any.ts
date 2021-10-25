//Lo recomendado es no usar el tipo 'Any'
(() =>{

    let avenger: any = 123;
    let exisits;
    let power;

    //casting
    avenger = 'Dr strange';
    //console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0));

    avenger = 140.121312312;
    console.log((<number>avenger).toFixed(2));

    console.log(exisits);
    console.log(power);

})()