console.log("Ciclo FOR");
console.log("----------");

(() => {

    type Avenger = { 

        name: string,
        weapon: string;

    }

    const CapAmerica: Avenger = {
        name: "CapAmerica",
        weapon: "shield"
    }

    
    const thor: Avenger = {
        name: "thor",
        weapon: "Mjolnir"
    }

    const avenger = [CapAmerica, thor];

    for (let index = 0; index < avenger.length; index++) {
        const element = avenger[index];
        console.log(element.name);
    }

})()