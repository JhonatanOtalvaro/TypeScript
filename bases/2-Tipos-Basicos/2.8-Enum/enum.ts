console.log("========= Enum -> Enumeraciones =========");

(() => {

    enum AudioLevel {

        min = 0,
        medium = 5,
        max = 10

    }

    let currentAudio = AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel);

})()