console.log("xBuzzer... ENGAGED");

window.buzz = function(parentNode) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = "\
    .__xvg {\
        position:fixed;\
        top: 0px;\
        left: 0px;\
        width: 100vw;\
        height: 100vh;\
        z-index: 99999;\
    }\
    ";
    //style.appendChild(styletext);

    var container = document.createElement("div");
    container.innerHTML = "\
        <audio autoPlay='true'>\
            <source src='//xbuzzer.org/buzzer.mp3' />\
        </audio>\
        <svg class='__xvg' viewBox='0 0 100 100' preserveAspectRatio='true'>\
            <line x1=15 y1=15 x2=85 y2=85 style='stroke:rgb(255,0,0);stroke-width:10;' />\
            <line x1=85 y1=15 x2=15 y2=85 style='stroke:rgb(255,0,0);stroke-width:10;' />\
            <rect x=5 y=5 width=90 height=90 style='stroke:rgb(255,0,0);stroke-width:2;fill:none;' />\
        </svg>\
    ";

    parentNode = parentNode || document.body;
    parentNode.appendChild(container);
    parentNode.appendChild(style);
    window.setTimeout(function() {
        parentNode.removeChild(container);
        parentNode.removeChild(style);
    }, 2000);
}