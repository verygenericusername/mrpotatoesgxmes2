var icons = {
    create: function(src,type,about,url){
        var img = document.createElement("img");
        img.src = "icons/" + src + "." + type;
        img.height = 100;
        img.style.display = "inline-block";
        var node = document.createTextNode(about);
        var button = document.createElement("button");
        button.textContent = "Play";
        var container = document.createElement("div");
        container.style.display = "inline-block";
        container.style.padding = "10px";
        var br = document.createElement("br");
        var br2 = document.createElement("br");
        var center = document.querySelector("center");
        container.appendChild(img);
        container.appendChild(br);
        container.appendChild(node);
        container.appendChild(br2);
        container.appendChild(button);
        center.appendChild(container);
        button.addEventListener("click", function(){
            redirect.redirectTo(url,"method2");
        });
        button.addEventListener("mouseover",sounds.hover);
        button.addEventListener("click",sounds.click_select);
    }
}