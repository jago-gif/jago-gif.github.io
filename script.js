
// formatear tipo de fecha//
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2022-02-08";

function registrarPaciente(event){    
    // evito que el formulario haga un submit normal
    // para manejarlo dentro de la función
    event.preventDefault(); 

    const boton = document.getElementById("boton").disabled = true;

    // recuperar datos del formulario
    
    const pname = document.getElementById("pname").value
    const tutor = document.getElementById("tutor").value
    const fecha = document.getElementById("fecha").value
    const especie = document.getElementById("especie").value
    const raza = document.getElementById("raza").value
    const atencion = document.getElementById("atencion").value
    const hora = document.getElementById("hora").value
    

        //envio de datos por API REST
        const baseURL   = "https://hwwyuypdcxdigyfznqcw.supabase.co";
        const apiCall   = '/rest/v1/horas'
        const apiKey    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc'
        const url       = baseURL + apiCall
        const paciente  = {
            pname,
            tutor,
            fecha,      
            especie,         
            raza,            
            atencion, 
            hora     
            
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