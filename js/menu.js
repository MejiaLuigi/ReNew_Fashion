document.getElementById("boton-hamburguesa").addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    var icono = document.querySelector("#boton-hamburguesa span");
  console.log("ya")
    menu.classList.toggle("mostrando");
    icono.classList.toggle("rotar");
  });