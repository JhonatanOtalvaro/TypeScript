console.log("Desestructuración de arreglos");
console.log("-----------------------------");

(() => {

    const avengerArr:string[] = ['Cap. América', 'Ironman', 'Hulk'];

    // Desestructuración de arreglos

    /*const ironman = avengerArr[1];
    console.log({ironman});*/

    const [ capitan , ironman, ] = avengerArr;
    console.log({ironman, capitan}); 

})()