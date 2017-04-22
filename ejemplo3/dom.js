//ejemplo de DOM
//window.onload= alert('hola mundo..');

window.addEventListener("load", main);

var titulo, contenido;

function main(){
    titulo = document.getElementById("titulo");

    contenido = document.getElementById("contenido");

    titulo.addEventListener("click", mensaje);

    contenido.addEventListener("mouseover", raton);
}

function raton(){
    //alert('raton...');
    titulo.style="color: blue";

    var enlace = document.getElementById("enlace");
    enlace.href="http://www.itmorelia.edu.mx/";
    enlace.innerHTML="<h1>ITM</h1>";
}

function mensaje(){
    //alert('presionandome...');
    var nombre = prompt("Dame un nombre?");

    titulo.innerHTML=nombre;
}
