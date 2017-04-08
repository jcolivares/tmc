/*
Ejemplo de js
*/

function sumar(){
    a = parseInt(window.prompt("Dame un numero"))
    b = parseInt(prompt("Dame otro número"))

    if(a>18){
        alert("Eres 'mayor edad'");
    }else{
        alert("Eres 'menor edad'");
    }

    c = a + b
    alert('Tu "resultado" es: '+ c)
}
