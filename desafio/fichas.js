const { createClient } = supabase
const baseURL   = "https://hwwyuypdcxdigyfznqcw.supabase.co";
const apiCall   = '/rest/v1/registro'
const apiKey    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc'
const url       = baseURL + apiCall

//variable contenedor
const contenedor = document.querySelector("tbody")
let resultados = ''

const mostrar = (registros) => {
    registros.array.forEach(registro => {
        resultados +=   ` 
                         <tr>
                             <td>${registro.id}</td>
                             <td>${registro.pname}</td>
                             <td>${registro.fnac}</td>
                             <td>${registro.especie}</td>
                             <td>${registro.raza}</td>
                             <td>${registro.sexo}</td>
                             <td>${registro.peso}</td>
                             <td>${registro.diagnostico}</td>
                             
                         </tr>
                        ` 
                        
    })
    contenedor.innerHTML=resultados
}

    fetch(url, {              
    headers: {
        method: 'GET',
        "Content-Type": "application/json",
        "apikey": apiKey,
        "authorization": "Bearer "+apiKey
        },
})
.then(Response => Response.json() )
.then( data => mostrar(data) )
.catch(error => console.log(error) )


 


    
