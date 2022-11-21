//const nombre=document.formulario.nombre.value
//const comportamiento=document.formulario.comportamiento.value
//const ciudad=document.formulario.ciudad.value
//const Regalo=document.formulario["descripcion-regalo"].value

function nombre(){
    let nombre=document.formulario.nombre.value
    return nombre

}
function comportamiento(){
    let comportamiento=document.formulario.comportamiento.value
    return comportamiento

}
function ciudad(){
    let ciudad=document.formulario.ciudad.value
    return ciudad
    
}
function Regalo(){
    let Regalo=document.formulario["descripcion-regalo"].value
    return Regalo

}



function validarNombre (nombre) {
    if (0 === nombre.length) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (50 <= nombre.length) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    return "";
}

function validarCiudad(ciudad) {
    if ("" === ciudad) {
        return "seleccione una opcion";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (0 === descripcionRegalo.length) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (50 <= descripcionRegalo.length) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    return "";
}

