document.addEventListener("DOMContentLoaded", function() {
    myFunction();
});

console.log("outer here");

function myFunction() {
  document.getElementById("root").innerHTML = "<p>Paragraph changed.</p>";
  console.log("here");
}
