function show() {
    event.stopPropagation();
    alert("Hola!");
 }

document.getElementById("button").addEventListener("click", showdiv);

function showdiv() {
    alert("Hola! Soy el div");
 }