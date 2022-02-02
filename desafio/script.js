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
    const form           = event.currentTarget;
    const pname          = form[0].value 
    const tutor          = form[1].value 
    const fnac           = form[2].value 
    const especie        = form[3].value 
    const raza           = form[4].value 
    const sexo           = form[5].value 
    const peso           = form[6].value 
    const diagnostico    = form[7].value 
    
    // Conexion API REST desde libreria//
    import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = 'https://hwwyuypdcxdigyfznqcw.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
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

document.getElementById("registro")
    .addEventListener("submit", registrarPaciente);