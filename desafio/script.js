import { createClient } from '@supabase/supabase-js'
import { format } from 'path/posix';

// formatear tipo de fecha//
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';

function registrarPaciente(event){    
    // evito que el formulario haga un submit normal
    // para manejarlo dentro de la función
    event.preventDefault(); 

    const boton = document.getElementById("boton").disabled = true;

    // constantes del formulario
    const form = document.getElementById("form")
    const pname = document.getElementById("pname")
    const tutor = document.getElementById("tutor")
    const fnac = document.getElementById("fnac")
    const especie = document.getElementById("especie")
    const raza = document.getElementById("raza")
    const sexo = document.getElementById("sexo")
    const peso = document.getElementById("peso")
    const diagnostico = document.getElementById("diagnostico")
    
    //evento de envio
    form.addEventListener('submint', (e) => {
        e.preventDefault();
        checkInputs();
    });

        function checkInputs() {
         // recupero los valores ingresador x el usuario
        const pnameValue         = pname.value 
        const tutorValue         = tutor.value
        const fnacValue          = fnac.value
        const especieValue       = especie.value
        const razaValue          = raza.value
        const sexoValue          = sexo.value
        const pesoValue          = peso.value
        const diagnosticoValue   = diagnostico.value
        
        }

document.getElementById("form")
    .addEventListener("submit", registrarPaciente);