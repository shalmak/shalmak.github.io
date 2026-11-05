document.addEventListener("DOMContentLoaded", function() {
    init();
});

function init() {
    canvas = document.createElement("canvas");
    canvas.id="canvas";
    canvas.width=100;
    canvas.height=100;
    canvas.style="border:1px solid #000000;";
    document.getElementById("root").appendChild(canvas);
}
