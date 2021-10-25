console.log("========= Never ==========");

(() => {

    const error = (message: string):never => {
        
        throw new Error(message);

    }

    error('Error');
    console.log("Hola mundo");

})()