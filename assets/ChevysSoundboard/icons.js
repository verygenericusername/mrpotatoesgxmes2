var icons = {
  create: function(src,txtnode,snd) {
    var container = document.createElement("div");
    container.style.display = "inline-block";
    container.style.padding = "10px";

    var img = document.createElement("img");
    img.style.display = "inline-block";
    img.style.padding = "10px";
    var center = document.querySelector("center");
    var playbtn = document.createElement("button");
    playbtn.textContent = "Play";
    var node = document.createTextNode(txtnode);
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    img.src = "icons/" + src;
    img.height = "100";
    img.width = "100";
    img.style.border = "0.5px solid black";
    container.appendChild(img);
    container.appendChild(br);
    container.appendChild(node);
    container.appendChild(br2);
    container.appendChild(playbtn);
    playbtn.addEventListener("click", function() {
       if(snd === 1){
        sound.arabic();
       }
       if(snd === 2){
        sound.beekay();
       }
       if(snd === 3){
        sound.dialup();
       }
       if(snd === 4){
        sound.gameovertranzit();
       }
       if(snd === 5){
        sound.gc();
       }
       if(snd === 6){
        sound.gce();
       }
       if(snd === 7) {
        sound.lego();
       }
       if(snd === 8){
        sound.metalpipe();
       }
       if(snd === 9){
        sound.newround();
       }
       if(snd === 10){
        sound.newroundfull();
       }
       if(snd === 11){
        sound.ps1();
       }
       if(snd === 12){
        sound.ps1e();
       }
       if(snd === 13){
        sound.spicychep();
       }
       if(snd === 14){
        sound.sc();
       }
       if(snd === 15){
        sound.LETITGROW();
       }
       if(snd === 16){
        sound.yahoomario();
       }
             if(snd === 17){
       sound.beekay2();
       }
      if(snd === 18){
      sound.polishcow();
      }
      });
      center.appendChild(container);
  },
  addstop: function(){
    var stopbtn = document.createElement("button");
    stopbtn.textContent = "Stop All Sounds";
    var br = document.createElement("br");
    var center = document.querySelector("center");
    center.appendChild(stopbtn);
    center.appendChild(br);
    stopbtn.addEventListener("click", function(){
      sound.stopall();
    });
  },
  addplayall: function(){
       var playall = document.createElement("button");
    playall.textContent = "Play All Sounds";
    var br = document.createElement("br");
    var center = document.querySelector("center");
    center.appendChild(playall);
    center.appendChild(br);
    playall.addEventListener("click", function(){
        sound.arabic();
        sound.beekay();
        sound.dialup();
        sound.gameovertranzit();
        sound.gc();
        sound.gce();
        sound.lego();
        sound.metalpipe();
        sound.newround();
        sound.newroundfull();
        sound.ps1();
        sound.ps1e();
        sound.spicychep();
        sound.sc();
        sound.LETITGROW();
        sound.yahoomario();
      sound.beekay2();
      sound.polishcow();
    });
  }
};
