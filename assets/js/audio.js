let play=false;
function playBg(){
    
    if(play){
        document.getElementById("audio-icon").setAttribute("class","bi bi-volume-up-fill");
        document.getElementById("bgAudio").pause();
        play=false;

    }
    else{
        document.getElementById("audio-icon").setAttribute("class","bi bi-volume-mute-fill");
        document.getElementById("bgAudio").play();
        play=true;
    }
    
}
