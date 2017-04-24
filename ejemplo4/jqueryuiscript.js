$(function(){
   //alert("E");
    $("#fecha").datepicker();

    var canvas = $("#canvas")[0];

    if(canvas.getContext){
        alert("Tu navegador soporta canvas");
    }
    else{
       alert("Tu navegador no soporta canvas");
    }

    if(Modernizr.inputtypes.date){
        alert("Tu navegador soporta date");
    }else{
        alert("Tu navegador  NO soporta date");
    }

});
