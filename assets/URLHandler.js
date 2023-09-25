var url = {
    open: function(base64URL){
        var url = atob(base64URL);
        var win = window.open();
        var iframe = document.createElement("iframe");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.src = url;
        win.document.body.appendChild(iframe);
    }
}