var other = {
    start: function(){
        var startimg = document.querySelector(".startimg");
        startimg.src = "assets/icons/startupfinal.gif";
    },
    freezeStartupLogo: function() {
        var startimg = document.querySelector(".startimg");
        startimg.src = "assets/icons/freezeframe.png";
    },
    playAudio: function(assetName){
        var newAud = new Audio(`assets/sounds/${assetName}`);
        newAud.volume = 1.0
        newAud.play();
    }
};