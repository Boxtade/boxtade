
var autoresize = function(){
    var size = window.innerHeight;
    var nodeIframes = document.getElementsByClassName("iFrame");
    var allIframes = Array.prototype.slice.call(nodeIframes,0);
    allIframes.forEach(function(iframe, index){
        iframe.style.height = (size * 0.85) + "px";
    });
};

window.onresize = autoresize;

window.onload = autoresize;

