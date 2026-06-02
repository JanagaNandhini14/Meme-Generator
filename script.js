const memeTemplates = [

    "meme1.jpg",
    "meme2.jpg",
    "meme3.jpg",
    "meme4.jpg",
    "meme5.jpg",

];

function generateMeme(){

    const topText =
        document.getElementById("topInput").value;

    const bottomText =
        document.getElementById("bottomInput").value;

    document.getElementById("topText").innerText =
        topText;

    document.getElementById("bottomText").innerText =
        bottomText;
}

function randomMeme(){

    const randomIndex =
        Math.floor(
            Math.random() * memeTemplates.length
        );

    document.getElementById("memeImage").src =
        memeTemplates[randomIndex];
}