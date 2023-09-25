//**CURSOR MOVING SCRIPT**\\
  var cursor = {
    set: function(){
      var cursor = document.querySelector(".cur");
      var cursorImg = document.querySelector(".curImg");
      document.addEventListener("mousemove", track);
    
      function track(e) {
        cursorImg.style.left = e.clientX + "px";
        cursorImg.style.top = e.clientY + "px";
      }
    }
  }