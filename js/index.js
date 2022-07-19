
// FUNCIONES DECLARADAS
function sumar (num1, num2, num3, num4){
    return parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)
}
function jornadas(sumar, jor) {
    return sumar *  parseFloat(jor) 
}

alert ("Binvenido al cotizador de paquetes, a continuación vas a poder cotizar tu combo de equipos de filmación. Por favor elige 4 equipos para cotizar tu combo, recuerda que podrás ingresar solo un modelo de cada rubro")

// USO DE CICLO 
let listadeequipos = '';
for (let index = 0; index < 4; index++) {
    listadeequipos += prompt("Por favor ingresa los modelos de los equipos que desas alquilar")+"\n";
}
alert( "has seleccionado " +"\n"  + listadeequipos+ " es correcto¿?");

// USO DE FUNCIONES PARA REALIZAR LAS OPERACIONES + CONDICIONAL
alert("Bien, ahora te pedimos por favor, que ingreses los  montos de alquiler por jornada de cada equipo solicitado")

let cam= prompt("ingrese  el valor de la cámara")
let lent= prompt ("ingrese el valor del lente")
let microfono= prompt ("ingrese el valor del microfono")
let tripode= prompt ("ingrese el valor del tripode")
let cantidad= prompt ("ingrese la cantidad de jornadas que utilizara los equipos")
let montototal= jornadas( sumar ( cam, lent, microfono, tripode ) , cantidad) 

if(cantidad !=0 && cantidad!= "" ) {
    alert("tu alquiler es " + montototal + " ARS" )
}else{
    alert ("por favor verifique los datos ingresados") 
}

// CONDICIONAL
descuentoestudiante= prompt ("eres estudiante?")
if (descuentoestudiante=="si"||descuentoestudiante=="SI") {
      let descuento = montototal - (montototal * 0.25)
alert("por ser estudiante abonas con un 25% off por lo tanto tu costo final es de  " + descuento + " ARS" )
    
} else if (descuentoestudiante=="no"||descuentoestudiante=="NO"){ 
        alert("Lo sentimos, usted no posee ninguna promoción por lo que debe abonar " + montototal + " ARS" )
} else { 
    alert("Por favor verifique los datos ingresados" )
}






