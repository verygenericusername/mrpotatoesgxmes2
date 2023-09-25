var redirect = {
    redirectTo: function(url,method){
        if(method === "method1"){
            var a = document.createElement("a");
            a.href = url;
            a.click();
        }
        if(method === "method2"){
            var win = window.open(url);
        }
    }
}