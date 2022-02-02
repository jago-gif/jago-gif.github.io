import { createClient } from '@supabase/supabase-js'

// formatear tipo de fecha//
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';

function registrarPaciente(event){    
    // evito que el formulario haga un submit normal
    // para manejarlo dentro de la función
    event.preventDefault(); 

    const boton = document.getElementById("boton").disabled = true;

    // recupero los valores ingresador x el usuario
    document.getElementById("pname").value
    document.getElementById("tutor").value
    document.getElementById("fnac").value
    document.getElementById("especie").value
    document.getElementById("raza").value
    document.getElementById("sexo").value
    document.getElementById("peso").value
    document.getElementById("diagnostico").value

    
    // envío los datos vía API REST
    const baseURL   = "https://hwwyuypdcxdigyfznqcw.supabase.co";
    const apiCall   = '/rest/v1/f-registro'
    const apiKey    = process.env.SUPABASE_KEY
    const url       = baseURL + apiCall
    const paciente    = {
        pname,
        tutor,
        fnac,
        especie,
        raza,
        sexo,
        peso,
        diagnostico,
    }
    
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer "+apiKey
        },
        body: JSON.stringify(paciente)
    })
        .then( response => {
            if( response.ok ) {
                mostrarMensaje("ok", "Se han guardado correctamente sus datos.");
                return response.json();
            } else {
                mostrarMensaje("error", "Hubo un error al guardar el registro.");
            }
        })
        .then( data     => console.log(data) ) 
        .catch( err     => mostrarMensaje("error", "Se generó una excepción al ejecutar, contacte al administrador si el problema persiste.") )
    ;

    return false;
}

document.getElementById("form-registro")
    .addEventListener("submit", registrarPaciente);