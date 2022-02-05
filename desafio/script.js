
// formatear tipo de fecha//
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';

function registrarPaciente(event){    
    // evito que el formulario haga un submit normal
    // para manejarlo dentro de la función
    event.preventDefault(); 

    const boton = document.getElementById("boton").disabled = true;

    // recuperar datos del formulario
    
    const pname = document.getElementById("pname").value
    const tutor = document.getElementById("tutor").value
    const fnac = document.getElementById("fnac").value
    const especie = document.getElementById("especie").value
    const raza = document.getElementById("raza").value
    const sexo = document.getElementById("sexo").value
    const peso = document.getElementById("peso").value
    const diagnostico = document.getElementById("diagnostico").value
    

        //envio de datos por API REST
        const baseURL   = "https://hwwyuypdcxdigyfznqcw.supabase.co";
        const apiCall   = '/rest/v1/registro'
        const apiKey    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc'
        const url       = baseURL + apiCall
        const paciente  = {
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
}

document.getElementById("form")
    .addEventListener("submit", registrarPaciente);