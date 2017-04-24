//Ejemplo de jquery
$(document).ready(function(){
    //alert("hola jquery");

    $("#titulo").click(function(){

        //alert('Presionando...');
        $(this).text(""+Date());
        //$("#contenido").hide();
        //$("#contenido").toggle(3000);

        //$("#contenido").slideToggle(3000);

        $("#contenido").fadeToggle(3000);


    });


    $("p").click(function(){
       /*$(this).css("color", "blue");
        $(this).css("font-size", "5em");*/
        //$("p").css("color", "red");
        /*$("p").css({
  "color": "green",
  "background": "gray",
  "border": "1px solid black",
  "text-align": "right"
});*/

    $("p").addClass("clase");

        $("#contenido").load("recurso.html");

    });

    $("#cuatri").change(cambiar);

    $("#nombre").keyup(function(){

        console.log($(this).val());

    });


});

function cambiar(){
    //alert("cambiando");
    var cuatrimestre = $("#cuatri").val();

    $("#globo").html("<mark>"+cuatrimestre+"</mark>");
}
