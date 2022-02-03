
//variable contenedor
const contenedor = document.querySelector('tbody')
let resultados = ''

//fichas.js es el script para ver, editar, crear y eliminar fichas de registro de pacientes
        const baseURL   = "https://hwwyuypdcxdigyfznqcw.supabase.co";
        const apiCall   = '/rest/v1/f-registro'
        const apiKey    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc'
        const url       = baseURL + apiCall

        
        //funcion para mostrar los resultados
        const mostrar = (pacientes) => {
            pacientes.array.for(paciente => {
                resultados +=   
                                <tr>
                                <td>${paciente.pname}</td>
                                <td>${paciente.tutor}</td>
                                <td>${paciente.fnac}</td>
                                <td>${paciente.especie}</td>
                                <td>${paciente.raza}</td>
                                <td>${paciente.sexo}</td>
                                <td>${paciente.peso}</td>
                                <td>${paciente.diagnostico}</td>
                                </tr>
                                
            })
            contenedor.innerHTML = resultados

            
        }
        fetch(url, {            
            headers: {
                "Content-Type": "application/json",
                "apikey": apiKey,
                "authorization": "Bearer "+apiKey
            },
        })
        .then(Response => Response.json() )
        .then( data => mostrar(data) )
        .catch( error => console.log(resultados) )

        
        
        
