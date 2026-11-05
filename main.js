document.addEventListener("DOMContentLoaded", function() {
    init();
});

function init() {
  canvas = document.createElement("canvas");
  canvas.id="canvas";
  canvas.width=100;
  canvas.height=100;
  document.getElementById("root").appendChild(canvas);
}
