
function spawnMeisho(){
    const container = document.getElementById("container");
    const image = document.createElement("img");
    const randomPic = Math.floor(Math.random() * 100);
        if(randomPic > 1){
            image.src = "./images/doto.webp"
            image.alt = "Meisho"
            const audio = new Audio("./audio/meishodoto.mp3")
            audio.volume = 0.1;
            audio.play()
        }else if (randomPic === 1){
            image.src = "./images/meisho.png"
            image.alt = "Meisho"
            image.style.width = "250px";
            const audio = new Audio("./audio/meishoNeigh.mp3")
            audio.volume = 0.1;
            audio.play()
        }else{
            image.src = "./images/gold.png"
            image.alt = "Goldship"
            const audio = new Audio("./audio/goldImpost.mp3")
            audio.volume = 0.1;
            audio.play()
        }
    container.appendChild(image)
    document.body.append(container)
}