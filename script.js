const container = document.getElementById("container");



function spawnMeisho(){
    const image = document.createElement("img");
    const randomPic = Math.floor(Math.random() * 100);
        if(randomPic < 60){
            image.src = "./images/doto.webp"
            image.alt = "Meisho"
            const audio = new Audio("./audio/meishodoto.mp3")
            audio.volume = 0.1;
            audio.play()
        }else if (randomPic < 80){
            image.src = "./images/meisho.png"
            image.alt = "Meisho"
            image.style.width = "250px";
            const audio = new Audio("./audio/meishoNeigh.mp3")
            audio.volume = 0.1;
            audio.play()
        }else{
            image.src = "./images/gold.png"
            image.alt = "Goldship"
            image.style.width = "165px";
            const audio = new Audio("./audio/goldImpost.mp3")
            audio.volume = 0.1;
            audio.play()
        }
    container.appendChild(image)
    checkWarning()
}

const clearButton = document.getElementById("clearButton")
function clearMeish(){
    const video = document.createElement(`video`)
    video.style.position = "absolute";
    video.src = "./video/zahand.webm"
    video.controls = false;
    video.style.top = "121px"
    video.style.maxWidth = "100%";
    document.body.append(video);
    video.volume = 0.03;
    video.play()
    setTimeout(() => {
        video.remove()
        while (container.firstChild){
        container.removeChild(container.firstChild) 
    }
    }, 3000);

    }

    function disableButton(){
        clearButton.disabled = true;
    }
    

    function enableButton(){
        setTimeout(() => {
        clearButton.disabled = false;
        },4000);
    }

