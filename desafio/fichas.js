const { createClient } = supabase;
const baseURL = "https://hwwyuypdcxdigyfznqcw.supabase.co";
const apiCall = "/rest/v1/registro";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc";
const url = baseURL + apiCall;

//variable contenedor
const contenedor = document.querySelector("tbody");
let resultados = "";

const mostrar = (registros) => {
  registros.array?.forEach((registro) => {
    resultados += ` 
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
                        `;
  });
  contenedor.innerHTML = resultados;
};

document.getElementById("btnload").addEventListener("click", () => {
  fetch(url, {
    headers: {
      method: "GET",
      "Content-Type": "application/json",
      apikey: apiKey,
      authorization: "Bearer " + apiKey,
    },
  })
    .then((response) => {
      console.dir(response);
      return response.json();
    })
    .then((data) => {
      console.dir(mostrar);
      return data;
    })
    .catch((error) => {
      console.dir(error);
      return error;
    });
});
