var currentState = false
document.getElementById("playButtonContainer").addEventListener("click", function(){
    const playButton = document.getElementById("playButtonContainer")
    if (currentState == false){
        playButton.innerHTML = "<div class=\"pauseButton\"></div>"
        currentState = true
    }
    else{
        playButton.innerHTML = "<div id=\"playButtonContainer\"><div class=\"playButton\"></div></div>"
        currentState = false
    }
});

document.getElementById("playButtonContainer", "pauseButtonContainer").addEventListener("mouseover", function(){

})