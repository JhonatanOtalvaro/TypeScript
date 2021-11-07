console.log("Desestructuración de objetos");
console.log("----------------------------");

(() => {

    const avengers = {

        nick: "Nick Fury",
        ironman: "Tony Stark",
        vision: "Vision",
        activo: true,
        poder: 1500

    }

    const{ poder, vision } = avengers;

    console.log("el poder de vision es de:" + poder.toFixed());

    //------------------------------------------------------------------

    const printAvenger = (avengers:any) => {

        console.log(avengers.nick);

    }

    printAvenger(avengers);

})()

